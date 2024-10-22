import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth, db } from "../../../lib/Firebase/firebaseSetup";
import { LEVANTINI_USERS } from "../../../lib/Firebase/constants";
import { doc, getDoc } from "firebase/firestore";
import { createOrGetUser } from "../../../lib/Firebase/userService";
const AuthContext = createContext();
export function useAuth() {
  return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const fetchUserData = async () => {
        if (user) {
          try {
            const userInCollection = await createOrGetUser(user);
            console.log(userInCollection);
            setCurrentUser({
              ...userInCollection,
            });
          } catch (error) {
            console.error("Error fetching user data: ", error);
            setCurrentUser(null);
          }
        } else {
          setCurrentUser(null);
        }
        setLoading(false);
      };
      fetchUserData();
    });
    return () => unsubscribe();
  }, []);
  const signInWithGoogle = async (onSuccess) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const userInCollection = await createOrGetUser(user);
      setCurrentUser({
        ...userInCollection,
      });
      if (onSuccess) {
        onSuccess(user);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  const logout = async () => {
    try {
      await firebaseSignOut(auth);
      setCurrentUser(null); // Reset user state after logout
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const value = {
    currentUser,
    signInWithGoogle,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
  );
};
