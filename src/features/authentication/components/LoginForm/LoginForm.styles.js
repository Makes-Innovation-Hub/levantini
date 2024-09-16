import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  color: var(--grey-black--);
  font-size: clamp(36px, 8vw, 128px);
  text-align: center;
  /* margin-top: 20vh; */
  margin-bottom: 40vh;
  font-family: var(--font-Redressed), sans-serif;
  width: 100%;
  max-width: 644px;

  @media (max-height: 600px) {
    margin-top: 10vh;
    margin-bottom: 20vh;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LogoutButton = styled.button`
  padding: 10px 20px;
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
`;

export const GoogleSignInButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 42px;
  margin-left: 40%;
  padding: 0 16px;
  background-color: #ffffff;
  border: 1px solid #dadce0;
  border-radius: 4px;
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
