import styled from "styled-components";
export const LogoutGoogle = styled.button`
  background-color: #ffffff;
  margin-left: -5px;
  color: var(--grey-black);
  /* border: none; */
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.4rem;
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;
