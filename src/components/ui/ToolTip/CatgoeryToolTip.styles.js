import styled from "styled-components";

export const CategoryToolTipContainer = styled.div`
  padding: 20px;
  border: 2px dashed #d35883;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 2px 7px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 1;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -90px;
    border-width: 17.25px;
    border-height: 21px;
    border-style: solid;
    border-color: red transparent transparent transparent;
  }
`;

export const Message = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #d35883;
`;
