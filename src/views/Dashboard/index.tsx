import React from "react";
import { Grid } from "@material-ui/core";

import RouteMapper from "../../router/RouteMapper";
import NavigationRouter from "../../router/NavigationRouter";
import { DashboardRoutes } from "./routes";
import logo from "../../assets/svg/Logo.svg";
import logout from "../../assets/svg/Icon_Logout.svg";
import { SvgIcon } from "../../router/NavigationRouter";

import {
  MainContainer,
  SideMenu,
  MainContent,
  AppHeader,
  AppMain,
  Logo,
  NavItems,
  LogoutSec,
} from "./style";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  console.log("---------Dash");
  return (
    <MainContainer container>
      <SideMenu item lg={2} md={2} sm={12} xs={12}>
        <Logo>
          <img src={logo} alt="logo" />
        </Logo>
        <NavItems>
          <NavigationRouter data={DashboardRoutes} />
        </NavItems>
        <LogoutSec>
          <SvgIcon src={logout} alt="icon" />
          <span>Log Out</span>
        </LogoutSec>
      </SideMenu>
      <MainContent item lg={10} md={10} sm={12} xs={12}>
        <Grid container>
          <AppHeader item xs={12}>
            <div>
              <h3>Search Card</h3>
            </div>
            <div>
              <h3>Admin Profile</h3>
            </div>
          </AppHeader>
          <AppMain item xs={12}>
            <RouteMapper data={DashboardRoutes} />
          </AppMain>
        </Grid>
      </MainContent>
    </MainContainer>
  );
};

export default Dashboard;
