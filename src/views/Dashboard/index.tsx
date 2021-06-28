import React from "react";
import { Grid } from "@material-ui/core";

import RouteMapper from "../../router/RouteMapper";
import { DashboardRoutes } from "./routes";

interface Props {}

const Dashboard: React.FC = (props: Props) => {
  console.log("---------Dash");
  return (
    <Grid container>
      <Grid item lg={1}>
        <h1>Side Menu</h1>
      </Grid>
      <Grid item lg={11}>
        <Grid container>
          <Grid item xs={12}>
            <h1>Dashboard Header</h1>
          </Grid>
          <Grid item xs={12}>
            <RouteMapper data={DashboardRoutes} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Dashboard;
