import styled from "styled-components";

export const GoogleSignInButton = styled.button`
  background-color: #4285f4;
  color: white;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pinyon Script", cursive;
  margin-top: 10px;

  &:hover {
    background-color: #357ae8;
  }

  &:focus {
    outline: none;
  }

  img {
    margin-right: 12px;
  }
`;

export const Title = styled.h1`
  color: #333;
  font-size: 50px;
  text-align: center;
  margin-bottom: 100%;
  color: white;
  font-family: "Pinyon Script", cursive;

  @media (max-width: 768px) {
    font-size: 36px;
    margin-bottom: 300px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 200px;
  }
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 50px;
  /* background-color: whit; */
`;
