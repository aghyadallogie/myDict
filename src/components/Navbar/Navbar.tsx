import { useDispatch } from "react-redux";
import { ActionTypes } from "../../store/actions/types";
import { styles } from "./Navbar.styles";
import {
  RiHome4Fill,
  RiSettings2Fill,
  RiFolderHistoryFill,
  RiQuestionnaireFill,
  RiLogoutBoxRFill,
  RiDoubleQuotesR
} from "react-icons/ri";
import { NavLink } from "react-router-dom";

export type Styles = {
  Nav: any;
  NavItem: any;
  Wrapper: any;
};

export const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <styles.Nav>
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiHome4Fill />
      </NavLink>
      <NavLink
        to="/history"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiFolderHistoryFill />
      </NavLink>
      <NavLink
        to="/quiz"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiQuestionnaireFill />
      </NavLink>
      <NavLink
        to="/quotes"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiDoubleQuotesR />
      </NavLink>
      <NavLink
        to="/settings"
        className={({ isActive }) => (isActive ? "active" : "")}
      >
        <RiSettings2Fill />
      </NavLink>
      <span
        style={{ cursor: "pointer" }}
        onClick={() => dispatch({ type: ActionTypes.LOGOUT_USER })}
      >
        <RiLogoutBoxRFill />
      </span>
    </styles.Nav>
  );
};
