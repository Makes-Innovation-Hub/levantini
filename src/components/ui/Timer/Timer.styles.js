import styled from "styled-components";
import { CgTimer } from "react-icons/cg";

export const Container = styled.div`
  width: 310px;
  margin: 0 auto;
`;

export const TimerContainer = styled.div`
  width: 100%;
  height: 15px;
  border-radius: 50px;
  overflow: hidden;
`;

export const ProgressBar = styled.div`
  height: 100%;
  width: ${({ $progress }) => $progress}%;
  background-color: ${({ $progress }) => ($progress > 60 ? "var(--green)" : "#D35883")};
  border-radius: 50px;
  transition: width 2s linear;
`;

export const TimerIcon = styled(CgTimer)`
  width: 53px;
  height: auto;
  margin-top: 25px;
  color: ${({ $progress }) => ($progress > 60 ? "var(--green)" : "#D35883")};
`;
