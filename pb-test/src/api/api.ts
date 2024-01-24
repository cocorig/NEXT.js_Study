const baseURL = process.env.NEXT_PUBLIC_PB_URL;

// get
export const fetchNotes = async () => {
  try {
    const response = await fetch(`${baseURL}/api/collections/todos/records`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`에러 , Status: ${response.status}`);
    }
    const data = await response.json();
    return data?.items as any[];
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};

// create
export const addNote = async (note: any) => {
  try {
    const response = await fetch(`${baseURL}/api/collections/todos/records`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });

    if (!response.ok) {
      throw new Error(`에러 Status: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};
//  get
export const fetchNoteById = async (id: string) => {
  try {
    const response = await fetch(
      `${baseURL}/api/collections/todos/records/${id}`,
      { next: { revalidate: 10 } } // revalidating data: 캐시된 데이터를 일정 시간간격으로 재검증
    );

    if (!response.ok) {
      throw new Error(`에러: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};

// update
export const updateNoteById = async (id: string, updatedData: any) => {
  try {
    const response = await fetch(
      `${baseURL}/api/collections/todos/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    );

    if (!response.ok) {
      throw new Error(`에러: ${response.status}`);
    }

    const updatedNote = await response.json();
    return updatedNote;
  } catch (error) {
    console.error("에러", error);
    throw error;
  }
};

// delete
export const deleteNoteById = async (id: string) => {
  try {
    const response = await fetch(
      `${baseURL}/api/collections/todos/records/${id}`,
      {
        method: "DELETE",
      }
    );

    if (!response.ok) {
      throw new Error(`에러 Status: ${response.status}`);
    }
  } catch (error) {
    console.error("에러:", error);
    throw error;
  }
};
