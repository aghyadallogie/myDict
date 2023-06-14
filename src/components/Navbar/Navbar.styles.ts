import styled from "styled-components";
import { Styles } from "./Navbar";

export const styles = {} as Styles;

styles.Nav = styled.nav`
  top: 0;
  position: sticky;
  width: 100%;
  padding: 20px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

styles.NavItem = styled.div`
  color: #333;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: var(--nav-item-padding);

  svg {
    width: 4rem;
  }
`;
