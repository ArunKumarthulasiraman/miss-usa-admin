import React from "react";

import { CardMain, Logo } from "./styles";

import logo from "../../assets/svg/Logo.svg";

interface Props {
  children: any;
  margin?: string;
}

const AccountCard = (props: Props) => {
  const { children, margin } = props;
  return (
    <CardMain margin={margin}>
      <Logo>
        <img src={logo} alt="logo" />
      </Logo>
      {children}
    </CardMain>
  );
};

export default AccountCard;
