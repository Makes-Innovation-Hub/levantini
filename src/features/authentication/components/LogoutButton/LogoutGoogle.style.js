import styled from "styled-components";

export const LogoutGoogle = styled.button`
  background-color: #f5f5f5;
  color: var(--grey-black);
  border: none;
  cursor: pointer;
  /* border-radius: 5px; */
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem;
    font-size: 0.8rem;
  }
`;
