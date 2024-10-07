import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/Firebase/firebaseSetup";
import Leaderboard from "../../components/LeaderBoard/LeaderBoard";

const LeaderboardPage = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "users"));

        const usersData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedUsers = usersData.sort((a, b) => b.points - a.points);

        setUsers(sortedUsers);
      } catch (error) {
        console.error("Error fetching users: ", error);
      }
    };

    fetchUsers();
  }, []);

  return <Leaderboard users={users} />;
};

export default LeaderboardPage;

// Example function to update user points with random scores
// const hardcodeRandomScores = async (userId) => {
//   const userRef = doc(db, "users", userId);
//   const randomScore = Math.floor(Math.random() * 50000); // Generate random score
//   await updateDoc(userRef, {
//     points: randomScore,
//   });
// };
