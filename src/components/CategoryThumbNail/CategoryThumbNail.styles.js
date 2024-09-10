import styled from "styled-components";

export const Card = styled.div`
  position: relative;
  width: 149px;
  height: 145px;
  border-radius: 30px;
  overflow: hidden;
  cursor: pointer;
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
  background: var(--color-my-box);

  width: 133px;
  height: 52px;
  border-radius: 8px 8px 0 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  padding-bottom: 5px;
  margin-left: 8px;
`;

export const Text = styled.p`
  font-family: var(--font-abeezee-italic);
  font-style: italic;
  font-weight: 400;
  font-size: 13px;
  line-height: 17.29px;
  color: --white;
  margin: 0;
  padding: 0;
`;
