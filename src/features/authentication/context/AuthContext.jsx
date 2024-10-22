import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "../../../lib/Firebase/firebaseSetup";

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
  console.log({ currentUser });
  const value = {
    setCurrentUser,
    currentUser,
    signInWithGoogle,
    logout,
  };
  return (
    <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
  );
};
