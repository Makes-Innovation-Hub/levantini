import styled from "styled-components";
import "../../styles/colors.css";
import "../../styles/fonts.css";

export const Card = styled.div`
  position: relative;
  width: 149px;
  height: 145px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;

  @media (max-width: 378px) {
    width: 120px;
    height: 116px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 30px;
`;

export const Overlay = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: var(--color-overlay-blur);
  width: 133px;
  height: 52px;
  border-radius: 8px 8px 0 0;
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: 8px;
  color: var(--white--);
  @media (max-width: 378px) {
    width: 104px;
    height: 41px;
  }
`;

export const Text = styled.p`
  font-family: var(--font-abeezee-regular);
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 17.29px;
  color: white;
  margin: 0;
  padding: 0;
`;
