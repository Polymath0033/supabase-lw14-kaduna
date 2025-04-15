import { FC, useState, useEffect } from "react";
import { AppHeader } from "../components/AppHeader";
import { useNavigate, useParams } from "react-router-dom";
import { supabase } from "../libs/supabase";
import { Notes } from "../types/supabase";
import AppInput from "../components/AppInput";
import { useUser } from "../hooks/useUser";
export const EditNote: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const [note, setNote] = useState<Notes>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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
      setLoading(true);
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("id", id)
        .eq("user_id", user?.id)
        .single();
      setLoading(false);
      if (data) {
        setNote(data);
        setTitle(data.title);
        setContent(data.content);
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
  const submitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!title || !content) {
      alert("Please fill in all fields");
      return;
    }
    if (!id) return;
    if (!user) return;
    const { data, error } = await supabase
      .from("notes")
      .update({
        title: title,
        content: content,
      })
      .eq("id", id)
      .eq("user_id", user.id)
      .select("*")
      .single();
    setLoading(false);
    console.log("data", data);

    if (error) {
      setError(error.message);
      return;
    } else {
      setError("");
      // Navigate to home page or any other page
      navigate("/");
    }
  };

  return (
    <>
      <div className="py-4 bg-neutral-700 w-full">
        <AppHeader />
      </div>
      <form
        onSubmit={submitHandler}
        className="bg-neutral-950 w-full flex flex-col h-screen px-[42px]"
      >
        <nav className="w-full bg-neutral-950 flex justify-between  mt-4 ">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="text text-text-preset-5 font-semibold flex items-center gap-2 text-neutral-300"
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
            Cancel
          </button>
          <button type="submit" className="text-text-preset-5 text-blue-500 ">
            {loading ? "Saving..." : "Save Note"}
          </button>
        </nav>
        <div className="flex flex-col gap-4 mt-4">
          <AppInput
            id="title"
            type="text"
            label="Title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            defaultValue={note?.title}
          />
          <label htmlFor="content">
            <span className="text-white text-text-preset-4">Content</span>
            <textarea
              name="content"
              id="content"
              placeholder="Start typing your note here…"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              className="w-full h-[calc(100vh-200px)] bg-neutral-950 text-text-preset-5 text-white px-4 py-2 mt-4 rounded-8 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-neutral-500 placeholder:text-text-preset-5"
            ></textarea>
          </label>
        </div>
        {error && <div className="text-red-500 text-center mt-4">{error}</div>}
      </form>
    </>
  );
};
