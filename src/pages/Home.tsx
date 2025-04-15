import { FC } from "react";
import { NoteCard } from "../components/NoteCard";
import { AppHeader } from "../components/AppHeader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../libs/supabase";
import { Notes } from "../types/supabase";
import moment from "moment";
import { useUser } from "../hooks/useUser";

export const Home: FC = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user, loading: userLoading, error: userError } = useUser();
  useEffect(() => {
    if (userLoading) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [userLoading]);
  useEffect(() => {
    const fetchNotes = async () => {
      if (!user) return;
      setLoading(true);
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .eq("user_id", user.id)
        .order("last_updated", { ascending: false });
      setLoading(false);
      if (error) {
        setError(error.message);
        return;
      }
      if (data) {
        setNotes(data);
      }
    };
    fetchNotes();
  }, [user]);
  useEffect(() => {
    if (userError) {
      setError(userError);
    }
  }, [userError]);

  return (
    <div className="bg-neutral-700 h-screen flex flex-col w-full ">
      {/* <header className="flex justify-between w-full px-[42px] "> */}
      <AppHeader>
        <Link
          to={"/new"}
          className="bg-blue-700 rounded-24 text-white  px-4 py-2 mt-4 hover:bg-blue-500 transition duration-300 ease-in-out focus:bg-blue-500"
        >
          + Add new notes
        </Link>
      </AppHeader>
     
      <main className="w-full px-[42px] mt-12 grid gap-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {loading && <div className="text-white text-center">Loading...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {notes.length === 0 && !loading && (
          <div className="text-white text-center">No notes found</div>
        )}

        {!loading &&
          !error &&
          notes.length > 0 &&
          notes.map((note) => (
            <Link to={`/note/${note.id}`} className="" key={note.id}>
              <NoteCard
                title={note.title}
                content={note.content}
                updateAt={moment(note.last_updated).format("YYYY-MM-DD HH:mm")}
              />
            </Link>
          ))}
      </main>
    </div>
  );
};
