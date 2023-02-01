import styled from "styled-components";
import { Styles } from "./LanguagePicker";

export const styles = {} as Styles;

styles.LanguagePicker = styled.div`
  display: grid;
  cursor: pointer;
  padding: 4rem;
  grid-template-columns: auto auto auto;
  column-gap: 4rem;
  row-gap: 4rem;
`;

styles.Flag = styled.div<{picked: any}>`
  text-align: center;
  background-color: ${(props) => (props.picked ? "#aaa" : "#fff")};
  border: 1px solid green;
`;
