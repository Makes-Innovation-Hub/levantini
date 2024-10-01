import React from "react";
import {
  BoardContainer,
  Crown,
  Name,
  Points,
  Position,
  ProfileImage,
  Rank,
  UserDetails,
  UserRow,
} from "./LeaderBoard.Style";

const Leaderboard = ({ users }) => {
  return (
    <BoardContainer>
      {users.map((user, index) => (
        <UserRow key={user.id} isTopThree={index < 3}>
          <Points>{user.points.toLocaleString()}</Points>
          <UserDetails>
            <ProfileImage src={user.profileImage} alt={user.name} />
            <Name>{user.name}</Name>
          </UserDetails>
          <Rank>
            {index === 0 && <Crown color="#FFD700" />}
            {index === 1 && <Crown color="#C0C0C0" />}
            {index === 2 && <Crown color="#CD7F32" />}
            <Position>{index + 1}</Position>
          </Rank>
        </UserRow>
      ))}
    </BoardContainer>
  );
};
export default Leaderboard;

//   <Leaderboard users={users} />;
