"use client";
import React, { useState } from "react";
import { addNote } from "@/api/api";
import { useRouter } from "next/navigation";
const AddNotePage: React.FC = () => {
  const router = useRouter();
  const [newNote, setNewNote] = useState({
    note: "",
    title: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    console.log(value);
    setNewNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const addedNote = await addNote(newNote);
    router.refresh();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">제목</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newNote.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="note">내용</label>
        <textarea
          id="note"
          name="note"
          value={newNote.note}
          onChange={handleInputChange}
          required
        />
        <button type="submit">추가하기</button>
      </form>
    </div>
  );
};

export default AddNotePage;
