import styled from "styled-components";

export const breakpoints = {
  mobile: "600px",
  tablet: "1024px",
  laptop: "1366px",
  desktop: "1920px",
};

export const ToastContainer = styled.div`
  width: 100vw;
  height: 270px;
  overflow-y: auto;
  color: var(--white);
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Responsive styles 
  @media (max-width: ${breakpoints.mobile}) {
    height: 275px; 
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    height: 240px; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 300px; 
  }*/
`;

export const ToastCorrect = styled.div`
  background-color: var(--green);
  width: 100%;
  height: 50%;

  /* Responsive styles 
  @media (max-width: ${breakpoints.mobile}) {
    height: 275px; 
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    height: 240px; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 300px; 
  }*/
`;

export const ToastTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: var(--grey-black);
  text-align: center;

  /* Responsive styles 
  @media (max-width: ${breakpoints.mobile}) {
    height: 275px; 
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    height: 240px; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 300px; 
  }*/
`;

export const ToastText = styled.p`
  margin-bottom: 15px;
  color: var(--grey-black);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  /* Responsive styles 
  @media (max-width: ${breakpoints.mobile}) {
    height: 275px; 
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    height: 240px; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 300px; 
  }*/
`;

export const ToastButton = styled.button`
  background-color: var(--white);
  color: var(--grey-black);
  font-weight: 700;
  text-align: center;
  border: none;
  cursor: pointer;
  border-radius: 10px;
  width: 338px;
  height: 57px;
  font-size: 20px;
  line-height: 22px;
  padding: 0.6em 1.2em;

  /* Responsive styles 
  @media (max-width: ${breakpoints.mobile}) {
    height: 275px; 
  }

  @media (min-width: ${breakpoints.tablet}) and (max-width: ${breakpoints.laptop}) {
    height: 240px; 
  }

  @media (min-width: ${breakpoints.desktop}) {
    height: 300px; 
  }*/
`;
