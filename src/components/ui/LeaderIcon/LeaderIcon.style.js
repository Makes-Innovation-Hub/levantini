import styled from "styled-components";

export const LeaderboardWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-rubik);
  font-size: 16px;
  color: #333;
  margin-bottom: 84px;
  gap: 10px;
`;

export const IconWrapper = styled.div`
  width: 20px;
  height: 28px;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const LeaderboardText = styled.span`
  font-style: italic;
`;
