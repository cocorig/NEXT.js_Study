"use client";
import { useState } from "react";
import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AddDataToFirestore = (): JSX.Element => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Firestore에 데이터 추가
  async function addDataToFirestore(
    name: string,
    email: string,
    message: string
  ): Promise<boolean> {
    try {
      const messagesCollection = collection(db, "messages");

      await addDoc(messagesCollection, {
        email,
        message,
        name,
      });

      // Firestore에서 데이터 가져와 콘솔에 출력
      console.log("Data added successfully!");
      handleCollection(); // 데이터 추가 후 Firestore 데이터 가져오기

      return true; // 데이터 추가 성공
    } catch (error) {
      console.error("Error adding document: ", error);
      return false; // 데이터 추가 실패
    }
  }

  // Firestore에서 데이터 조회
  const handleCollection = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "messages"));
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      });
    } catch (error) {
      console.error("Error getting documents: ", error);
    }
  };

  // Submit 버튼 클릭 시 데이터 추가
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const added = await addDataToFirestore(name, email, message);

    if (added) {
      setName("");
      setEmail("");
      setMessage("");

      alert("Successfully saved!");
    }
  };

  // Firestore에서 데이터 업데이트
  const updateDataInFirestore = async (
    docId: string,
    updatedData: { [key: string]: any }
  ): Promise<boolean> => {
    try {
      const docRef = doc(db, "messages", docId);
      await updateDoc(docRef, updatedData);
      console.log("Document updated successfully!");
      handleCollection(); // 데이터 업데이트 후 Firestore 데이터 가져오기
      return true;
    } catch (error) {
      console.error("Error updating document: ", error);
      return false;
    }
  };

  // Firestore에서 데이터 삭제
  const deleteDataFromFirestore = async (docId: string): Promise<boolean> => {
    try {
      const docRef = doc(db, "messages", docId);
      await deleteDoc(docRef);
      console.log("Document deleted successfully!");
      handleCollection(); // 데이터 삭제 후 Firestore 데이터 가져오기
      return true;
    } catch (error) {
      console.error("Error deleting document: ", error);
      return false;
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email">email:</label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message">message:</label>
        <input
          id="message"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {/* <button onClick={() => deleteDataFromFirestore(doc.id)}>
        Delete Data
      </button>

      <button
        onClick={() =>
          updateDataInFirestore(doc.id, {
            message: "Updated message",
          })
        }
      >
        Update Data
      </button> */}
    </div>
  );
};

export default AddDataToFirestore;
