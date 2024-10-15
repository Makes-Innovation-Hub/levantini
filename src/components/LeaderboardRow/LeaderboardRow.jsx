import React from "react";
import {
  Name,
  NameContainer,
  Points,
  RankContainer,
  Row,
  ProfileImage,
} from "./LeaderboardRow.style";
import Crown from "../ui/Crown/Crown";

const LeaderboardRow = ({ rank, name, points, profilePicture, isTopThree }) => {
  return (
    <Row>
      <NameContainer>
        <RankContainer $isTopThree={isTopThree}>
          {isTopThree && <Crown rank={rank} />}
          <span>{rank}</span>
        </RankContainer>
        {profilePicture && (
          <ProfileImage src={profilePicture} alt={`${name}'s profile`} />
        )}
        <Name>{name}</Name>
      </NameContainer>
      <Points>{points.toLocaleString()}</Points>
    </Row>
  );
};

export default LeaderboardRow;
