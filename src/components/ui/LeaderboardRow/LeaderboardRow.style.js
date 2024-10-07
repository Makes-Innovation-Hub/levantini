import styled from "styled-components";
import { FaCrown } from "react-icons/fa";

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  border-radius: 50px;
  margin-bottom: 8px;
  background-color: ${(props) => (props.isTopThree ? "#f3f4f6" : "#f3f4f6")};
`;

export const RankContainer = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: ${(props) => (props.isTopThree ? "#1f2937" : "#47434d")};
  /* color: ${(props) => (props.isTopThree ? "white" : "#1f2937")}; */
  color: white;
`;

export const NameContainer = styled.div`
  display: flex;
  align-items: center;
  color: black;
`;

export const Name = styled.span`
  font-weight: 600;
`;

export const Points = styled.span`
  font-weight: 700;
  color: black;
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
