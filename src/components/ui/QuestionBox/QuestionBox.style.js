import styled from "styled-components";

export const QuestionBoxFirst = styled.div`
  .NotificationDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 27.3dvh;
    margin-top: 2.3125rem;
  }
`;
export const QuestionBoxSecond = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: var(--font-rubik);
    font-weight: 400;
    font-style: italic;
    font-size: 14px;
    line-height: 18.62px;
    margin-top: 8.875rem;
  }
  .answers {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const Image = styled.img`
  width: 182px;
  height: 255px;
  object-fit: cover;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;
