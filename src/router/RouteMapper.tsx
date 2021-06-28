import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { CommonRoute } from "../config/routes";

interface Props {
  data: {
    name: string;
    props: {
      path: string;
      component: React.FC<{}>;
      exact?: boolean;
      noAuth?: boolean;
    };
  }[];
}

const RouteMapper = (props: Props) => {
  const { data } = props;

  const HasToken: boolean = true;

  return (
    <Switch>
      {data
        .filter((item) => !!item?.props)
        .map((item, index) => {
          const { component: Component, exact, ...rest } = item?.props;
          return HasToken ? (
            <Route
              key={index}
              exact={exact}
              {...rest}
              render={(props: object) => <Component {...props} />}
            />
          ) : (
            <Redirect to={CommonRoute.home} />
          );
        })}
    </Switch>
  );
};

export default RouteMapper;
