import {
  Name,
  NameContainer,
  Points,
  RankContainer,
  Row,
  StyledCrown,
} from "./LeaderboardRow.style";

const LeaderboardRow = ({ rank, name, points, isTopThree }) => (
  <Row $isTopThree={isTopThree}>
    <NameContainer>
      <RankContainer $isTopThree={isTopThree}>
        {isTopThree ? <StyledCrown size={16} rank={rank} /> : <span>{rank}</span>}
      </RankContainer>
      <Name>{name}</Name>
    </NameContainer>
    <Points>{points.toLocaleString()}</Points>
  </Row>
);

export default LeaderboardRow;
