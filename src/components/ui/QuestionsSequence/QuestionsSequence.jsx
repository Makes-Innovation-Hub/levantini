import styled from "styled-components";

const DotContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const QuestionsSequence = ({ children }) => {
  return <DotContainer>{children}</DotContainer>;
};

export default QuestionsSequence;
