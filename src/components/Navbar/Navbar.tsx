import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ActionTypes } from "../../store/actions/types";
import { styles } from "./Navbar.styles";
import {
  RiHome4Fill,
  RiSettings2Fill,
  RiFolderHistoryFill,
  RiQuestionnaireFill,
  RiLogoutBoxRFill,
} from "react-icons/ri";

export type Styles = {
  Nav: any;
  NavItem: any;
  Wrapper: any;
};

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <styles.Nav>
      <Link to="/home">
        <styles.NavItem>
          <RiHome4Fill size={"2rem"} />
        </styles.NavItem>
      </Link>
      <Link to="/history">
        <styles.NavItem>
          <RiFolderHistoryFill size={"2rem"} />
        </styles.NavItem>
      </Link>
      <Link to="/quiz">
        <styles.NavItem>
          <RiQuestionnaireFill size={"2rem"} />
        </styles.NavItem>
      </Link>
      <Link to="/settings">
        <styles.NavItem>
          <RiSettings2Fill size={"2rem"} />
        </styles.NavItem>
      </Link>
      <span onClick={() => dispatch({ type: ActionTypes.LOGOUT_USER })}>
        <styles.NavItem>
          <RiLogoutBoxRFill size={"2rem"} />
        </styles.NavItem>
      </span>
    </styles.Nav>
  );
};
