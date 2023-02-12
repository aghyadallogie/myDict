import styled from "styled-components";
import { Styles } from "./TargetWord";

export const styles = {} as Styles;

styles.Wrapper = styled.div`
  height: auto;
`;

styles.Table = styled.div`
  padding: 0.1rem;
  background-color: #d8d8d877;
  margin-bottom: 1rem;

  &:hover {
    outline: 1px solid green;
  }
`;

styles.Row = styled.div`
  border-bottom: 1px solid silver;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
`;
