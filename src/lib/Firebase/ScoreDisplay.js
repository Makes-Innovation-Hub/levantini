// import { useEffect, useState } from "react";
// import { doc, onSnapshot } from "firebase/firestore";
// import { auth, db } from "../../../lib/Firebase/firebaseSetup";
// import { LEVANTINI_USERS } from "../../../lib/Firebase/constants";

// export default function ScoreDisplay() {
//   const [totalPoints, setTotalPoints] = useState(0);

//   useEffect(() => {
//     const user = auth.currentUser;

//     if (!user) {
//       console.error("User is not authenticated");
//       return;
//     }

//     const userRef = doc(db, LEVANTINI_USERS, user.uid);

//     // Real-time listener for points update
//     const unsubscribe = onSnapshot(userRef, (docSnap) => {
//       if (docSnap.exists()) {
//         const userData = docSnap.data();
//         setTotalPoints(userData.points || 0); // Update UI with real-time points
//       } else {
//         console.error("User document does not exist");
//       }
//     });

//     // Cleanup the listener on component unmount
//     return () => unsubscribe();
//   }, []);

//   return <div>Total Points: {totalPoints}</div>;
// }
