import React from "react";
import { Note } from "@/hooks/usePocketbase";
import { deleteNoteById } from "@/api/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface NoteItemsProps {
  item: Note;
}

const NoteItems: React.FC<NoteItemsProps> = ({ item }) => {
  const { id, title, note, created, updated } = item;
  const router = useRouter();
  const handleDelete = async () => {
    try {
      if (id) {
        await deleteNoteById(id);
        console.log(` ${id} 삭제 성공`);
      } else {
        console.warn("삭제 에러");
      }
    } catch (error) {
      console.error("삭제 에러", error);
    }
  };

  return (
    <>
      <Link href={`/notes/${id}`}>
        <h2>{title}</h2>
        <p>{note}</p>
      </Link>
      <button onClick={handleDelete}>삭제</button>
    </>
  );
};

export default NoteItems;
