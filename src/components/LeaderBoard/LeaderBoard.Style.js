import styled from "styled-components";
import { FaCrown } from "react-icons/fa";

export const LeaderboardContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 16px;
`;

export const StyledCrown = styled(FaCrown)`
  color: ${(props) => {
    switch (props.rank) {
      case 1:
        return "#fbbf24";
      case 2:
        return "#9ca3af";
      case 3:
        return "#d97706";
      default:
        return "transparent";
    }
  }};
`;
