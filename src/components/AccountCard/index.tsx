import React from "react";

import { CardMain, Logo } from "./styles";

import logo from "../../assets/svg/Logo.svg";

interface Props {
  children: any;
}

const AccountCard = (props: Props) => {
  const { children } = props;
  return (
    <CardMain>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      {children}
    </CardMain>
  );
};

export default AccountCard;
