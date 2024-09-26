import styled from "styled-components";

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const CounterContainer = styled.div`
  background-color: #47434d;
  border-radius: 12px;
  padding: 5px 10px;
  color: var(--white);
  font-size: 16px;
`;

export const LogoSvgContainer = styled.div`
  position: relative;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.div`
  position: absolute;
  font-family: var(--font-rubik);
  font-size: 20px;
  font-style: italic;
  font-weight: 400;
  line-height: 13.3px;
  color: var(--black);
  font-family: Arial, sans-serif;
`;
