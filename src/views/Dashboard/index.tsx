import React from "react";
import { Grid } from "@material-ui/core";

// import RouteMapper from "../../router/RouteMapper";
// import { DashboardRoutes } from "./routes";
import logo from "../../assets/svg/Logo.svg";

import {
  MainContainer,
  SideMenu,
  MainContent,
  AppHeader,
  AppMain,
  Logo,
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
        <div>
          <h2>Nav item wrap</h2>
        </div>
        <div>
          <h2>Log out section</h2>
        </div>
      </SideMenu>
      <MainContent item lg={10} md={10} sm={12} xs={12}>
        <Grid container>
          <AppHeader item xs={12}>
            <div>
              <h1>Search Card</h1>
            </div>
            <div>
              <h1>Admin Profile</h1>
            </div>
          </AppHeader>
          <AppMain item xs={12}>
            <h1>Dashboard Main</h1>
            {/* <RouteMapper data={DashboardRoutes} /> */}
          </AppMain>
        </Grid>
      </MainContent>
    </MainContainer>
  );
};

export default Dashboard;
