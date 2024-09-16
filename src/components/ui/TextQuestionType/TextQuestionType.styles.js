import styled from "styled-components/macro";
import { breakpoints } from "../../../styles/breakingpoints";

export const TextQuestionType = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: var(--font-rubik-regular);
  font-style: italic;
  font-size: 14px;
  line-height: 18.62px;
  color: var(--grey-black);

  p {
    top: 153px;
    height: 38px;
    width: 243px;
    font-weight: 400;

    @media (max-width: ${breakpoints.mobile}) {
      height: 57px;
      width: 188px;
    }
  }
`;

export const Text = styled.span`
  top: 68px;
  bottom: 77px;
  height: 105px;
  width: 312px;
  font-weight: 700;

  @media (max-width: ${breakpoints.mobile}) {
    height: 95px;
    width: 278px;
  }
`;
