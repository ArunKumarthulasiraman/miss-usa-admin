import { CommonRoute } from "../config/routes";
import Account from "../views/Account";
import Dashboard from "../views/Dashboard";

export const MainRoute = [
  {
    name: "Login",
    props: {
      path: CommonRoute.home,
      component: Account,
      exact: true,
      noAuth: true,
    },
  },
  {
    name: "Forgot Password",
    props: {
      path: CommonRoute.account,
      component: Account,
      noAuth: true,
    },
  },
  {
    name: "OTP Verification",
    props: {
      path: CommonRoute.account,
      component: Account,
      noAuth: true,
    },
  },
  {
    name: "Reset Password",
    props: {
      path: CommonRoute.account,
      component: Account,
      noAuth: true,
    },
  },
  {
    name: "Dashboard Main",
    props: {
      path: CommonRoute.dashboard.default,
      component: Dashboard,
      exact: true,
    },
  },
];
