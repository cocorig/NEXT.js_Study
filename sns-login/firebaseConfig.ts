import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { UserData } from "@/types";
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
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
  databaseUrl: process.env.NEXT_PUBLIC_DATABASE_URL,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// export const addUserToCollection = async (userData: UserData) => {
//   console.log(userData);
//   try {
//     const docRef = await addDoc(collection(db, "user"), userData);
//     console.log("Document written with ID: ", docRef.id);
//   } catch (error) {
//     console.error("Error adding document: ", error);
//   }
// };
// export const handleUserCollection = async () => {
//   try {
//     const querySnapshot = await getDocs(collection(db, "user"));
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//     });
//   } catch (error) {
//     console.error("Error getting documents: ", error);
//   }
// };

// export async function addUserToCollection(
//   userData: UserData
// ): Promise<boolean> {
//   try {
//     console.log(userData);

//     const userCollection = collection(db, "user");

//     await addDoc(userCollection, {
//       userData,
//     });

//     // Firestore에서 데이터 가져와 콘솔에 출력
//     console.log("Data added successfully!");
//     handleUserCollection(); // 데이터 추가 후 Firestore 데이터 가져오기

//     return true; // 데이터 추가 성공
//   } catch (error) {
//     console.error("Error adding document: ", error);
//     return false; // 데이터 추가 실패
//   }
// }

export const handleUserCollection = async (): Promise<UserData[]> => {
  try {
    const querySnapshot = await getDocs(collection(db, "user"));

    // if (querySnapshot.empty) {
    //   return [];
    // }
    const fetchedUsers: UserData[] = [];
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());

      const aUser = {
        Address: doc.data()["Address"],
        Birthdate: doc.data()["Birthdate"],
        FullEmail: doc.data()["FullEmail"],
        Phone: doc.data()["Phone"],
        name: doc.data()["name"],
        nickname: doc.data()["nickname"],
        password: doc.data()["password"],
        passwordConfirm: doc.data()["passwordConfirm"],
      };

      fetchedUsers.push(aUser);
    });

    return fetchedUsers; // 데이터 반환
  } catch (error) {
    console.error("Error getting documents: ", error);
    return [];
  }
};
