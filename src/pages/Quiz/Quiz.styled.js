import styled from "styled-components";
import { breakpoints } from "../../styles/breakingpoints";
export const main = styled.main`
  display: flex;
  flex-direction: column;
  min-height: calc(100dvh - 82px);
`;
export const BottomWrapper = styled.div`
  margin-top: auto;
  margin-bottom: 20px;
`;
export const ButtonsWrapper = styled.div`
  margin-top: 31px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  @media (max-width: ${breakpoints.mobile}) {
    margin-top: 11px;
    gap: 6px;
  }
`;
