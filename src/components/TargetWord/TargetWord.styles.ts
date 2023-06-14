import styled from "styled-components";
import { Styles } from "./TargetWord";

export const styles = {} as Styles;

styles.Wrapper = styled.div`
  height: auto;
`;

styles.Table = styled.div`
  padding: 0.1rem;
  background: #111;
  margin-bottom: 1rem;
  width: 100%;

  background: linear-gradient(
      rgba(255, 255, 255, 0.25),
      rgba(255, 255, 255, 0.1)
    ),
    url("background-image.jpg");
  backdrop-filter: blur(8px);
  border: 1px solid white;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px #fffb;
  border-radius: 10px;
  padding: 20px;
  color: #abbbbf;
  text-align: center;

  &:hover {
    outline: 1px solid #fff;
  }
`;

styles.Row = styled.div`
  border-bottom: 1px solid #fffb;
  margin: 1rem;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;
