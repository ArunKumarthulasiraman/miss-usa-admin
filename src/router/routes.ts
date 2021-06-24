import { CommonRoute } from "../config/routes";
import Account from "../views/Account";

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
    name: "Reset Password",
    props: {
      path: CommonRoute.account,
      component: Account,
      noAuth: true,
    },
  },
];
