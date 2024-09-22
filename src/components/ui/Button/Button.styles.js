import styled from "styled-components";
import { breakpoints } from "../../../styles/breakingpoints";

export const Button = styled.button`
  margin: 11px 0;
  padding: 2px 0;
  padding-left: 17px;
  text-align: left;
  width: 286px;
  height: 29px;
  font-family: var(--font-rubik-regular);
  font-weight: 500;
  font-size: 12px;
  line-height: 24px;
  color: var(--white);
  border-color: transparent;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  &:focus {
    outline: none;
  }
  span {
    width: 49.2px;
    height: 24px;
  }
`;
