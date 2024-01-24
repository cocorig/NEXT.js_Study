import { fetchNoteById } from "@/api/api";
import Link from "next/link";

const NoteDetailPage = async ({ params }: any) => {
  const result = await fetchNoteById(params.id);
  const { title, id, note, created } = result;
  return (
    <div>
      <h2>{title}</h2>
      <h2>{note}</h2>
      <div>{created}</div>
      <Link href={`/notes/edit/${id}`}>수정하기</Link>
    </div>
  );
};

export default NoteDetailPage;
