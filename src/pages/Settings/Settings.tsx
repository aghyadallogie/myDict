import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";
import { RootState } from "../../store/reducers";
import { bindActionCreators } from "redux";
import { userActions } from "../../store/actions";
import { useDispatch } from "react-redux";

export const Settings: FC = () => {
  const dispatch = useDispatch();
  const { loadUserAction } = bindActionCreators(userActions, dispatch);

  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  useEffect(() => {
    loadUserAction(user.id);
  }, []);
  

  if (!user.id) return <Navigate to="/" />;

  return (
    <div className="page settings">
      <LanguagePicker />
    </div>
  );
};
