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
import { auth, db } from "./firebaseSetup";
import { LEVANTINI_USERS } from "../Firebase/constants";

export const createOrGetUser = async (user) => {
  try {
    const userRef = doc(db, LEVANTINI_USERS, user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      const newUser = {
        id: user.uid,
        name: user.displayName || "Anonymous",
        points: 0,
        photoURL: user.photoURL || "",
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
    const leaderboard = querySnapshot.docs.map((doc) => doc.data());
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
      return userData;
    } else {
      console.error("No such user!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching user points:", error);
    throw error;
  }
};

export const updateUserPoints = async (additionalPoints) => {
  const user = auth.currentUser;

  if (!user) {
    console.error("User is not authenticated");
    return;
  }

  const userRef = doc(db, LEVANTINI_USERS, user.uid);

  try {
    await updateDoc(userRef, {
      points: increment(additionalPoints),
    });

    console.log("Updated user points:", additionalPoints);
  } catch (error) {
    console.error("Error updating user points:", error);
  }
};

export const subscribeToUserPoints = (uid, callback) => {
  const userRef = doc(db, LEVANTINI_USERS, uid);

  // Subscribe to the user document to listen for point updates
  const unsubscribe = onSnapshot(userRef, (docSnap) => {
    if (docSnap.exists()) {
      const points = docSnap.data().points || 0;
      callback(points); // Pass points to the callback
    } else {
      console.error("User document does not exist");
    }
  });

  return unsubscribe;
};
