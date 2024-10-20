import styled from "styled-components";

export const ToolTipWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  left: ${(props) => props.left};
  padding: 4px;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 88.9px;
  z-index: 10;
  transform: translateX(0);
  border-radius: 13px;
  &::after {
    content: "";
    position: absolute;
    left: ${(props) => props.carrotPosition};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-top: 23px solid #ffffff;
    bottom: -18px;
  }
`;
