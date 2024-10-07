import React from "react";
import { LeaderboardContainer } from "./LeaderBoard.Style";
import LeaderboardRow from "../ui/LeaderboardRow/LeaderboardRow";

const Leaderboard = () => {
  const users = [
    { id: 1, name: "Shalev", points: 25256 },
    { id: 2, name: "ליעד", points: 24586 },
    { id: 3, name: "Yohav", points: 22957 },
    { id: 4, name: "Psyonix", points: 22541 },
    { id: 5, name: "Kratos", points: 22531 },
    { id: 6, name: "mario", points: 22521 },
    { id: 7, name: "luigi", points: 22500 },
    { id: 8, name: "princess mononoke", points: 22490 },
    { id: 9, name: "Leon Scott", points: 22480 },
  ];

  return (
    <LeaderboardContainer>
      {users.map((user, index) => (
        <LeaderboardRow
          key={user.id}
          rank={index + 1}
          name={user.name}
          points={user.points}
          isTopThree={index < 3}
        />
      ))}
    </LeaderboardContainer>
  );
};

export default Leaderboard;
