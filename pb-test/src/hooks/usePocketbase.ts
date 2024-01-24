import pb from "@/lib/connect";
export interface Note {
  id?: string;
  note: string;
  title: string;
  collectionId?: string;
  collectionName?: string;
  created?: string;
  updated?: string;
}

const TODOS_COLLECTION = "todos";
export const usePocketbase = () => {
  const getNotes = async (): Promise<Note[]> => {
    return pb.collection(TODOS_COLLECTION).getFullList({
      sort: "-created",
    });
  };
  const addNote = async (note: Note): Promise<Note[]> => {
    return pb.collection(TODOS_COLLECTION).create(note);
  };
  const getNoteByID = async (id: string) => {
    return pb.collection(TODOS_COLLECTION).getOne(id);
  };
  return {
    getNotes,
    addNote,
    getNoteByID,
  };
};
