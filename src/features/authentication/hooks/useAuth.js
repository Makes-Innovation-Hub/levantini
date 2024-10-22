// export const useAuth = () => {
//   const login = () => {
//     // eslint-disable-next-line no-console
//     console.log("logged in");
//   };
//   return { login };
// };

import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Cleanup the listener on unmount
    return () => unsubscribe();
  }, []);

  const login = () => {
    // eslint-disable-next-line no-console
    console.log("logged in");
  };

  return { user, login };
};
