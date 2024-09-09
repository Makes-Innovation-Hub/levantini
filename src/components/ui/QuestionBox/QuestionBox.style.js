import styled from "styled-components/macro";

export const StyledQuestionBox = styled.div`
  /* border: solid 2px orange; */
  display: flex;
  flex-direction: column;
  width: 286px;
  height: 800px;

  justify-content: center;
  font-family: var(--font-rubik-regular);
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  border-radius: 8px;
  border-color: transparent;
  color: var(--font-color--Answer--QuestionBox);
  background-color: ${(props) => props.color};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    opacity: 0.9;
    border-color: transparent;
  }
  p {
    color: var(--font-color--Question--QuestionBox);
    font-family: var(--font-rubik-regular);
    font-style: italic;
    font-size: 14px;
    line-height: 18.62px;
    border-color: transparent;
  }
`;

export const AnswerButton = styled.button`
  margin: 10px 0;
  padding: 2px 0;
  padding-left: 17px;
  font-size: 12px;
  line-height: 24px;
  color: var(--font-color--Answer--QuestionBox);
  font-family: var(--font-rubik-regular);
  cursor: pointer;
  border-color: transparent;
  width: 286px;
  text-align: left;
  height: 29px;
  font-weight: 500;

  /* border: solid 2px yellow; */
`;
