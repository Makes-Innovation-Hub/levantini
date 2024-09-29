import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: inherit;
  padding: 0 20px 0 20px;
  background-color: #f8f8f8;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }
`;

export const TextContainer = styled.div`
  max-width: 50%;
  padding-right: 20px;

  @media (max-width: 768px) {
    max-width: 100%;
    padding-right: 0;
    padding-bottom: 20px;
  }
`;

export const Title = styled.h1`
  font-family: "Inria Sans", sans-serif;
  font-size: 96px;
  font-weight: 700;
  line-height: 115px;
  color: #000000;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 48px;
    line-height: 1.2;
  }
`;

export const SubTitle = styled.h2`
  font-family: "Inria Sans", sans-serif;
  font-size: 48px;
  font-weight: 700;
  line-height: 58px;
  color: #3d484d;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 22px;
    line-height: 1.2;
  }
`;

export const Description = styled.p`
  font-family: "Inria Sans", sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 43px;
  color: #666666;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    font-size: 20px;
    line-height: 1.2;
  }
`;

export const Button = styled.a`
  display: inline-block;
  background-color: #ffc701;
  color: #1b2e35;
  font-size: 48px;
  font-weight: 700;
  text-decoration: none;
  padding: 20px 40px;
  border-radius: 8px;
  margin-top: 20px;

  @media (max-width: 768px) {
    font-size: 20px;
    padding: 10px 20px;
  }

  &:hover {
    background-color: #ffb600;
  }
`;

export const ImageContainer = styled.div`
  width: 550px;
  height: auto;
  img {
    width: 100%;
    height: auto;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;
