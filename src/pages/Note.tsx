import { FC } from "react";
import { AppHeader } from "../components/AppHeader";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { useEffect, useState } from "react";
import { Notes } from "../types/supabase";
import { DeleteModal } from "../components/DeleteModal";

export const Note: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Notes>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .single();
      console.log("data", data);
      setLoading(false);
      if (data) {
        setNote(data);
      }
      if (error) {
        setError(error.message);
        return;
      }
    };
    fetchNote();
  }, [id]);

  const deleteHandler = async () => {
    if (!id) return;
    setLoading(true);
    const { error } = await supabase.from("notes").delete().eq("id", id);
    setLoading(false);
    if (error) {
      setError(error.message);
      return;
    } else {
      setShowDeleteModal(false);
      navigate("/");
    }
  };
  return (
    <section className="flex flex-col w-full h-screen bg-neutral-700 ">
      <div className="py-4 bg-neutral-700 w-full">
        <AppHeader />
      </div>
      <div className="bg-neutral-950 w-full flex flex-col h-screen px-[42px]">
        <nav className="w-full bg-neutral-950 flex justify-between  mt-4 ">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex text-text-preset-5 text-neutral-300 "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.8124 15.3105L5.50195 8.99995L11.8124 2.68945L12.8729 3.74995L7.62292 8.99995L12.8729 14.25L11.8124 15.3105Z"
                fill="#CACFD8"
              />
            </svg>
            Go Back
          </button>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => navigate(`/note/${note?.id}/edit`)}
              className="text-text-preset-5 text-neutral-300 flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M12.75 2.25L15.75 5.25L13.5 7.5L10.5 4.5L12.75 2.25ZM2.25 15.75V17.25H3.75L14.25 6.75L12 4.5L2.25 14.25V15.75Z"
                  fill="#CACFD8"
                />
              </svg>
              Edit
            </button>
            <button
              type="button"
              onClick={() => setShowDeleteModal(true)}
              className="text-text-preset-5 text-neutral-300 flex gap-1 items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
              >
                <path
                  d="M2.25 15.75V17.25H3.75L14.25 6.75L12 4.5L2.25 14.25V15.75ZM12.75 2.25L15.75 5.25L13.5 7.5L10.5 4.5L12.75 2.25Z"
                  fill="#CACFD8"
                />
              </svg>
              Delete
            </button>
          </div>
        </nav>
        {loading && (
          <div className="flex justify-center items-center h-full">
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 1V3M12 21V23M4.22 4.22L5.64 5.64M18.36 18.36L19.78 19.78M1 12H3M21 12H23M4.22 19.78L5.64 18.36M18.36 5.64L19.78 4.22"
                stroke="#CACFD8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        )}
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
        <div className="flex flex-col gap-4 mt-4">
          <h2 className="text-white text-xl font-bold">{note?.title}</h2>
          <p className="text-neutral-300">{note?.content}</p>
        </div>
      </div>
      {showDeleteModal && (
        <DeleteModal
          onClose={() => setShowDeleteModal(false)}
          deleteHandler={deleteHandler}
        />
      )}
    </section>
  );
};
