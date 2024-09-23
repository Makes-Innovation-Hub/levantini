import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: var(--font-rubik);
  font-style: italic;
  font-weight: 400;
  font-size: 14px;
  margin-bottom: 30px;
  text-align: center;
  color: var(--grey-black);
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 20px;
  justify-items: center;
`;

export const Label = styled.span`
  font-family: var(--font-abeezee-regular);
  font-size: 16px;
  font-weight: 400;
`;
