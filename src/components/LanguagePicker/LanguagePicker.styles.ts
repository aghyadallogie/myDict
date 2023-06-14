import styled from "styled-components";
import { Styles } from "./LanguagePicker";

export const styles = {} as Styles;

styles.LanguagePicker = styled.div`
  display: grid;
  cursor: pointer;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;
  margin: 0 auto;
  margin-top: 5rem;
`;

styles.Flag = styled.div<{ picked: any }>`
  outline: ${(props) => (props.picked ? "3px solid silver" : "none")};
  line-height: 2rem ;
  width: 3rem;
`;
