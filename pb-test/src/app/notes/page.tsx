"use client";
import React, { useEffect, useState } from "react";
import { usePocketbase, Note } from "@/hooks/usePocketbase";
import { fetchNotes } from "@/api/api";
import NoteItems from "@/components/NoteItems";
const Notes: React.FC = () => {
  const { getNotes, addNote } = usePocketbase();
  const [notes, setNotes] = useState<Note[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchNotes();
      setNotes(result);
    };

    fetchData();
  }, []);
  console.log(notes);
  return (
    <div>
      {notes.length === 0 ? (
        <h1>텅텅</h1>
      ) : (
        notes.map((note) => <NoteItems key={note.id} item={note} />)
      )}
    </div>
  );
};

export default Notes;
