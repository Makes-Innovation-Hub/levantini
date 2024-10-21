import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseSetup";
import { LEVANTINI_USERS } from "../Firebase/constants";

// Function to update user points in Firebase
export const updateUserPoints = async (userId, newPoints) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, userId);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      const updatedPoints = (userData.points || 0) + newPoints;

      // Update points in Firebase
      await updateDoc(userRef, {
        points: updatedPoints,
      });

      return updatedPoints;
    } else {
      console.error("User does not exist.");
    }
  } catch (error) {
    console.error("Error updating points:", error);
    throw error;
  }
};
