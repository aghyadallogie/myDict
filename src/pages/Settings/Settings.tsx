import { FC } from "react";
import { LanguagePicker } from "../../components/LanguagePicker/LanguagePicker";

export const Settings: FC = () => {
  return (
    <div className="page settings">
      <LanguagePicker />
    </div>
  );
};
