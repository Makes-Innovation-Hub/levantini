import styled from "styled-components";

export const LogoutGoogle = styled.button`
  /* padding: ; */
  color: var(--grey-black);
  border: none;
  cursor: pointer;
  border-radius: 5px;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-left: au;
  /* Responsive styles */
  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.5rem 1rem; /* Adjust padding for mobile */
    font-size: 0.8rem; /* Smaller font for mobile */
  }

  &:hover {
    background-color: #e0e0e0;
  }
`;
