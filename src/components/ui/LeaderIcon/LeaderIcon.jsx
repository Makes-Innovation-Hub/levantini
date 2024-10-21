import React from "react";
import { IconWrapper, LeaderboardText, LeaderboardWrapper } from "./LeaderIcon.style";

const LeaderIcon = () => {
  return (
    <LeaderboardWrapper>
      <IconWrapper>
        <img src={"/images/crown-icon.svg"} alt="Leader Icon" />
      </IconWrapper>
      <LeaderboardText>Leaderboard</LeaderboardText>
    </LeaderboardWrapper>
  );
};

export default LeaderIcon;
