import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { db } from "./firebaseSetup";
import { LEVANTINI_USERS } from "../Firebase/constants";
export const createOrGetUser = async (user) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const newUser = {
        id: user.uid,
        name: user.displayName,
        points: 0,
        photoURL: user.photoURL || null,
      };
      await setDoc(userRef, newUser);
      return newUser;
    } else {
      const existingUser = userSnap.data();
      const updatedUser = {
        ...existingUser,
        photoURL: user.photoURL || existingUser.photoURL,
      };
      await setDoc(userRef, updatedUser, { merge: true });
      return updatedUser;
    }
  } catch (error) {
    console.error("Error in createOrGetUser:", error);
    throw error;
  }
};

export const getLeaderboard = async () => {
  try {
    const usersRef = collection(db, LEVANTINI_USERS);
    const q = query(usersRef, orderBy("points", "desc"), limit(10));
    const querySnapshot = await getDocs(q);
    const leaderboard = querySnapshot.docs.map((doc) => {
      const userData = doc.data();
      return userData;
    });
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};
