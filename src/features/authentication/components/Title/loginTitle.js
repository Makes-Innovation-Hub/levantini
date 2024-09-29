import styled from "styled-components";

export const Title = styled.h1`
  color: var(--grey-black);
  font-size: clamp(36px, 8vw, 128px);
  text-align: center;
  /* margin-top: 20vh; */
  /* margin-bottom: 40vh; */
  font-family: var(--font-Redressed), sans-serif;
  width: 100%;
  max-width: 644px;
  /* margin-right: 14vh; */

  @media (max-height: 600px) {
    margin-top: 10vh;
    margin-bottom: 20vh;
  }
`;