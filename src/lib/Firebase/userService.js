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
  increment,
  onSnapshot,
} from "firebase/firestore";
import { auth, db } from "./firebaseSetup"; // Ensure firebase setup import
import { LEVANTINI_USERS } from "../Firebase/constants"; // Firebase constants

// Create or get a user from Firestore
export const createOrGetUser = async (user) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      // If user does not exist, create a new user
      const newUser = {
        id: user.uid,
        name: user.displayName || "Anonymous", // Default to 'Anonymous' if no displayName
        points: 0,
        photoURL: user.photoURL || "", // Default to empty if no photoURL
      };
      await setDoc(userRef, newUser);
      return newUser;
    } else {
      // If the user exists, merge the new data (like updated photoURL)
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

// Get leaderboard (top 10 users based on points)
export const getLeaderboard = async () => {
  try {
    const usersRef = collection(db, LEVANTINI_USERS);
    const q = query(usersRef, orderBy("points", "desc"), limit(10)); // Top 10 users by points
    const querySnapshot = await getDocs(q);
    const leaderboard = querySnapshot.docs.map((doc) => doc.data());
    return leaderboard;
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    throw error;
  }
};

// Get points for a specific user based on their UID
export const getUserPoints = async (uid) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, uid);
    const userSnap = await getDoc(userRef);

    if (userSnap.exists()) {
      const userData = userSnap.data();
      return userData; // Return full user data instead of just points
    } else {
      console.error("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user points:", error);
    throw error;
  }
};

// Update user points by adding to the existing points in Firebase
export const updateUserPoints = async (additionalPoints) => {
  const user = auth.currentUser; // Ensure current user is authenticated

  if (!user) {
    console.error("User is not authenticated");
    return;
  }

  const userRef = doc(db, LEVANTINI_USERS, user.uid);

  try {
    await updateDoc(userRef, {
      points: increment(additionalPoints), // Increment points using Firebase
    });

    console.log("Updated user points:", additionalPoints);
  } catch (error) {
    console.error("Error updating user points:", error);
  }
};

// Real-time points listener
export const subscribeToUserPoints = (uid, callback) => {
  const userRef = doc(db, LEVANTINI_USERS, uid);

  // Real-time listener for points update
  const unsubscribe = onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      callback(docSnap.data().points || 0); // Ensure points are fetched and passed to the callback
    } else {
      console.error("User document does not exist");
    }
  });

  return unsubscribe; // Return unsubscribe function to stop listening
};
