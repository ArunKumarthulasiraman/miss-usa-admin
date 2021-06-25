import React from "react";
import { useParams } from "react-router-dom";

import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";

import { AccountMain } from "./style";

interface Props {}

interface ParamsType {
  screen: string;
}

const AccountHome: React.FC = (props: Props) => {
  const { screen } = useParams<ParamsType>();

  const LoadPage = (screen: string) => {
    switch (screen) {
      case "forgot_password":
        return <ForgotPassword />;
      case "reset_password":
        return <ResetPassword />;
      default:
        return <Login />;
    }
  };
  return <AccountMain>{LoadPage(screen)}</AccountMain>;
};

export default AccountHome;
