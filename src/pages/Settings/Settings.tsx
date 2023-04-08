import { FC } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";
import { RootState } from "../../store/reducers";

export const Settings: FC = () => {
  const user = useSelector((state: RootState) => state.authenticatedUser.user);

  // query settings(userId)
  

  if (!user.id) return <Navigate to="/" />;

  return (
    <div className="page settings">
      <LanguagePicker />
    </div>
  );
};
