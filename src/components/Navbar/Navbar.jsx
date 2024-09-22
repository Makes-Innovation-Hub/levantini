import styled from "styled-components";

export const Header = styled.header`
  width: 96px;
  height: 37px;
  position: absolute;
  top: 16px;
  left: 688px;
  gap: 0px;
  opacity: 0px;

  font-family: var(--font-redressed);
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export default function HeaderComponent() {
  return (
    <Header>
      <Logo>Levantini</Logo>
    </Header>
  );
}
