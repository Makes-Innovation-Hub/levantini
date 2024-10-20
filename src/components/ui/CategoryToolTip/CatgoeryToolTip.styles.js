import styled from "styled-components";

export const CategoryToolTipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  border: 2px dashed #d35883;
  border-radius: 8px;
  position: relative;
  z-index: 1;
  height: 90%;
  width: 97%;

 
`; // &::after {
  //   content: "";
  //   position: absolute;
  //   // left:90%;
  //   border-left: 10px solid transparent;
  //   border-right: 10px solid transparent;
  //   border-top: 23px solid #ffffff;
  // }

export const Message = styled.p`
  font-family: "Open Sans", sans-serif;
  font-size: 10px;
  font-weight: bold;
  text-align: center;
  color: #d35883;
`;
