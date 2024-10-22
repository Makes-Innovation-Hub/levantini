import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LeaderIcon from "../../components/ui/LeaderIcon/LeaderIcon";
import { LeaderboardContainer } from "./LeaderBoard.Style";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { useQuery } from "@tanstack/react-query";
import { getLeaderboard } from "../../lib/Firebase/userService";
import Spinner from "../../components/ui/Spinner/Spinner";
import LeaderboardRow from "../../components/LeaderboardRow/LeaderboardRow";
import { LEVANTINI_USERS } from "../../lib/Firebase/constants";

const Leaderboard = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: [LEVANTINI_USERS],
    queryFn: getLeaderboard,
  });

  if (isLoading) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  return (
    <LeaderboardContainer>
      <LeaderIcon />
      {users.map((user, index) => (
        <LeaderboardRow
          key={user.id}
          rank={index + 1}
          name={user.name}
          points={user.points}
          profilePicture={user.photoURL}
          isTopThree={index < 3}
        />
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
