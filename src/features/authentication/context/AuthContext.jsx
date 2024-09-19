// // src/features/authentication/context/AuthContext.js
// import React, { createContext, useContext, useState, useEffect } from "react";
// import {
//   GoogleAuthProvider,
//   signInWithPopup,
//   onAuthStateChanged,
//   signOut as firebaseSignOut,
// } from "firebase/auth";
// import { auth } from "../../../lib/firebaseSetup";

// const AuthContext = createContext();

// export function useAuth() {
//   return useContext(AuthContext);
// }

// export const AuthProvider = ({ children }) => {
//   const [currentUser, setCurrentUser] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setCurrentUser(user);
//       setLoading(false);
//     });

//     return () => unsubscribe;
//   }, []);

//   const signInWithGoogle = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       await signInWithPopup(auth, provider);
//     } catch (error) {
//       // console.error("Login failed:", error);
//     }
//   };

//   const logout = async () => {
//     try {
//       await firebaseSignOut(auth);
//     } catch (error) {
//       // console.error("Logout failed:", error);
//     }
//   };

//   const value = {
//     currentUser,
//     signInWithGoogle,
//     logout,
//   };

//   return (
//     <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
//   );
// };

// src/features/authentication/context/AuthContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "../../../lib/firebaseSetup";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return () => unsubscribe;
  }, []);

  const signInWithGoogle = async (onSuccess) => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      if (onSuccess) {
        onSuccess(result.user);
      }
    } catch (error) {
      // console.error("Login failed:", error);
    }
  };

  const logout = async () => {
    try {
      await firebaseSignOut(auth);
    } catch (error) {
      // console.error("Logout failed:", error);
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