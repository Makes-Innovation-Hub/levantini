import styled from "styled-components";

export const CategoryToolTipContainer = styled.div`
  border: 2px dashed #d35883;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%); /* This will center the arrow */
    border-width: 17.25px;
    border-style: solid;
    border-color: #d35883 transparent transparent transparent; /* Optional color change */
  }
`;

export const Message = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #d35883;
`;
