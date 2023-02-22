import styled from "styled-components";
import { Styles } from "./TranslateBox";

export const styles = {} as Styles;

styles.StyledForm = styled.form`
  display: flex;
  margin: 1rem 0;
`;

styles.Input = styled.input`
  width: 100%;
  height: 2.2rem;
  padding: 0.6rem;
  border: 0;
  color: blue;
  outline: 1px solid green;
  margin-bottom: 1.6rem;
`;

styles.Button = styled.button`
  height: 2.2rem;
  padding: 0 0.5rem;
  margin-left: 0.6rem;
  background: var(--primary);
  border: none;
  color: #fff;
  cursor: pointer;

  :hover {
    color: green;
    outline: 1px solid green;
  }
`;
