import styled from "styled-components";

export const GoogleSignInButton = styled.button.attrs(({ onClick }) => ({
  onClick,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 220px;
  height: 42px;
  padding: 0 16px;
  background-color: #ffffff;
  border: 1.5px solid #dadce0;
  border-radius: 10px;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #3c4043;
  cursor: pointer;
  transition:
    background-color 0.2s,
    box-shadow 0.2s;

  &:hover {
    background-color: #f7f8f8;
    box-shadow:
      0 1px 2px 0 rgba(60, 64, 67, 0.3),
      0 1px 3px 1px rgba(60, 64, 67, 0.15);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #4285f4;
  }

  img {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    height: 36px;

    img {
      width: 20px;
      height: 20px;
      margin-right: 6px;
    }
  }
`;
