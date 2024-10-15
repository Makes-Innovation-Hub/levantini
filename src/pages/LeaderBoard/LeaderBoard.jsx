import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LeaderIcon from "../../components/ui/LeaderIcon/LeaderIcon";
import { LeaderboardContainer } from "./LeaderBoard.Style";
import { useAuth } from "../../features/authentication/context/AuthContext";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createOrGetUser, getLeaderboard } from "../../lib/Firebase/userService";
import Spinner from "../../components/ui/Spinner/Spinner";
import LeaderboardRow from "../../components/LeaderboardRow/LeaderboardRow";

const Leaderboard = () => {
  const { currentUser } = useAuth();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  const {
    data: users = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["leaderboard"],
    queryFn: getLeaderboard,
  });

  const createOrGetUserMutation = useMutation({
    mutationFn: createOrGetUser,
    onSuccess: (newUser) => {
      queryClient.setQueryData(["leaderboard"], (oldData) => {
        if (!oldData) return [newUser];
        const existingUserIndex = oldData.findIndex((user) => user.id === newUser.id);
        if (existingUserIndex !== -1) {
          return oldData.map((user, index) =>
            index === existingUserIndex ? newUser : user,
          );
        } else {
          return [...oldData, newUser];
        }
      });
    },
  });

  React.useEffect(() => {
    if (currentUser) {
      createOrGetUserMutation.mutate(currentUser);
    }
  }, [currentUser]);

  if (isLoading)
    return (
      <div>
        <Spinner />
      </div>
    );
  if (error) return <div>An error occurred: {error.message}</div>;

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
