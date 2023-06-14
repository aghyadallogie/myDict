import styled from "styled-components";
import { Styles } from "./TranslateBox";

export const styles = {} as Styles;

styles.StyledForm = styled.form`
  display: flex;
  margin: 1rem 0;
`;

styles.Input = styled.input`
  /* width: 100%;
  height: 2.2rem;
  padding: 0.6rem;
  border: 0;
  color: blue;
  outline: 1px solid green;
  margin-bottom: 1.6rem; */

  width: 100%;
  padding: 15px 20px;
  padding-left: 40px;
  box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff;

  border: none;
  outline: none;
  background: transparent;
  border-radius: 10px;
  font-size: 1em;
`;

styles.Button = styled.button`
  box-shadow: 5px 5px 10px rgb(0, 0, 0, 0.1), -5px -5px 10px #fff;
  width: 5rem;
  padding: 15px 20px;
  cursor: pointer;
  font-weight: 600;

  border: none;
  outline: none;
  background: transparent;
  border-radius: 10px;
  font-size: 1em;

  :active {
    box-shadow: inset 5px 5px 10px rgba(0, 0, 0, 0.1), inset -5px -5px 10px #fff;
  }
`;

styles.ErrorMessage = styled.h3`
  height: 2rem;
  margin: 1rem 0;
  color: red;
  font-size: 1rem;
  text-align: center;
`;
