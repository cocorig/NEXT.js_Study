"use client";
import { useState, useEffect } from "react";
import { fetchNoteById, updateNoteById } from "@/api/api";
import { useParams, useRouter } from "next/navigation";

const EditNotePage: React.FC = () => {
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  console.log(id);
  const [note, setNote] = useState<any>({});
  const [editedNote, setEditedNote] = useState({
    note: "",
    title: "",
  });

  useEffect(() => {
    const fetchNote = async () => {
      if (id) {
        const fetchedNote = await fetchNoteById(id as string);
        setNote(fetchedNote);
        setEditedNote({
          note: fetchedNote.note,
          title: fetchedNote.title,
        });
      }
    };

    fetchNote();
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditedNote((prevNote) => ({
      ...prevNote,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await updateNoteById(id, editedNote);
      router.push(`/notes/${id}`);
      router.refresh();
    } catch (error) {
      console.error("업데이트 에러", error);
    }
  };

  return (
    <div>
      <h1>수정하기</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={editedNote.title}
          onChange={handleInputChange}
          required
        />

        <label htmlFor="note">Note:</label>
        <textarea
          id="note"
          name="note"
          value={editedNote.note}
          onChange={handleInputChange}
          required
        />

        <button type="submit">저장</button>
      </form>
    </div>
  );
};

export default EditNotePage;
