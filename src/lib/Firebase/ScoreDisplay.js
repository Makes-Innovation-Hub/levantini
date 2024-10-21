import { doc, getDoc, increment, updateDoc } from "firebase/firestore";
import { LEVANTINI_USERS } from "./constants";
import { db } from "./firebaseSetup";


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

// Update user points
export const updateUserPoints = async (uid, points) => {
  const userRef = doc(db, LEVANTINI_USERS, uid);
  try {
    await updateDoc(userRef, {
      points: increment(points), // Increment the points in Firebase
    });
  } catch (error) {
    console.error("Error updating user points:", error);
  }
};
