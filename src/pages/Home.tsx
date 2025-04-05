import { FC } from "react";
import { NoteCard } from "../components/NoteCard";
import { AppHeader } from "../components/AppHeader";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { supabase } from "../libs/supabase";
import { Notes } from "../types/supabase";
import moment from "moment";

export const Home: FC = () => {
  const [notes, setNotes] = useState<Notes[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const fetchNotes = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("notes")
        .select("*")
        .order("last_updated", { ascending: false });
      if (error) throw error;
      setNotes(data);
      console.log("notes", data);

      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError("Failed to fetch notes");
      console.error(error);
    }
  };
  useEffect(() => {
    fetchNotes();
  }, []);

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
      {/* <p className="flex items-center text-neutral-300 mt-4 px-[42px]">
        <span className="text-white text-2xl font-bold">My Notes</span>
        <span className="text-neutral-300 text-sm ml-2">({notes.length})</span>
      </p> */}
      <main className="w-full px-[42px] mt-12  grid gap-3 grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
        {loading && <div className="text-white text-center">Loading...</div>}
        {error && <div className="text-red-500 text-center">{error}</div>}
        {notes.length === 0 && !loading && (
          <div className="text-white text-center">No notes found</div>
        )}

        {!loading &&
          !error &&
          notes.length > 0 &&
          notes.map((note) => (
            <Link to={`/note/${note.id}`} key={note.id}>
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
