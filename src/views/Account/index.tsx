import React from "react";
import "./styles.css";

import Login from './Login';

interface Props {}

const AccountHome = (props: Props) => {
  return (
    <div className="account-main">
      <Login />
    </div>
  );
};

export default AccountHome;
