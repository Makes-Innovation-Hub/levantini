import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  setDoc,
  updateDoc,
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
        photoURL: user.photoURL,
        progress: [],
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

export const getUserPoints = async (uid) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData.points || 0;
    } else {
      console.error("No such user!");
      return 0;
    }
  } catch (error) {
    console.error("Error fetching user points:", error);
    throw error;
  }
};

// Update user points in Firebase
export const updateUserPoints = async (uid, newPoints) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, uid);
    await updateDoc(userRef, { points: newPoints });
    console.log("Points updated to:", newPoints);
  } catch (error) {
    console.error("Error updating points:", error);
    throw error;
  }
};
// Initialize Firestore

// export const updateUserPoints = async (userId, additionalPoints) => {
//   try {
//     const userRef = doc(db, LEVANTINI_USERS, userId);
//     const userSnap = await getDoc(userRef);

//     if (userSnap.exists()) {
//       const userData = userSnap.data();
//       const currentPoints = userData.points || 0;

//       // Update the user's points
//       await updateDoc(userRef, {
//         points: currentPoints + additionalPoints,
//       });
//     } else {
//       console.error("User document not found");
//     }
//   } catch (error) {
//     console.error("Error updating user points:", error);
//     throw new Error("Could not update points");
//   }
// };
