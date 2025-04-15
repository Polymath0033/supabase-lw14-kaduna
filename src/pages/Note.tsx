import { FC } from "react";
import { AppHeader } from "../components/AppHeader";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { useEffect, useState } from "react";
import { Notes } from "../types/supabase";
import { DeleteModal } from "../components/DeleteModal";
import { useUser } from "../hooks/useUser";

export const Note: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Notes>();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { user, error: userError, loading: userLoading } = useUser();
  useEffect(() => {
    if (userLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userLoading]);

  useEffect(() => {
    const fetchNote = async () => {
      if (!id) return;
      if (!user) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .eq("user_id", user?.id)
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
  }, [id, user]);
  useEffect(() => {
    if (userError) {
      setError(userError);
    }
  }, [userError]);

  const deleteHandler = async () => {
    if (!id) return;
    if (!user) return;
    setLoading(true);
    const { error } = await supabase
      .from("notes")
      .delete()
      .eq("id", id)
      .eq("user_id", user?.id);
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
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => navigate(`/note/${note?.id}/edit`)}
              className="text-text-preset-3 text-white flex items-center gap-1 bg-blue-500 hover:bg-blue-600 transition duration-300 ease-in-out focus:bg-blue-600 rounded-md px-3 py-2"
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
              className="text-text-preset-3 text-white flex gap-1 items-center bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out focus:bg-red-600 rounded-md px-3 py-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="26"
                viewBox="0 0 24 26"
                fill="none"
              >
                <path
                  d="M14.8521 4.37899L15.6702 6.16378H18.3097C19.1212 6.16378 19.7791 6.82166 19.7791 7.6332V8.7214C19.7791 9.27626 19.3293 9.72606 18.7745 9.72606H5.00466C4.4498 9.72606 4 9.27626 4 8.7214V7.6332C4 6.82166 4.65788 6.16378 5.46943 6.16378H8.10885L8.92705 4.37899C9.17255 3.84339 9.70775 3.5 10.2969 3.5H13.4821C14.0713 3.5 14.6065 3.84339 14.8521 4.37899Z"
                  stroke="#CACFD8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.24 9.80078V18.4865C18.24 20.1511 16.9073 21.5005 15.2634 21.5005H8.51661C6.8727 21.5005 5.54004 20.1511 5.54004 18.4865V9.80078"
                  stroke="#CACFD8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.1992 13.3164V17.8248M13.5796 13.3164V17.8248"
                  stroke="#CACFD8"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
