import styled from "styled-components";
import { Styles } from "./LanguagePicker";

export const styles = {} as Styles;

styles.LanguagePicker = styled.div`
  display: grid;
  cursor: pointer;
  padding: 1rem;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 2rem;
`;

styles.Flag = styled.div<{ picked: any }>`
  border: ${(props) => (props.picked ? "1px solid #aaa" : "none")};
  width: auto;
`;
