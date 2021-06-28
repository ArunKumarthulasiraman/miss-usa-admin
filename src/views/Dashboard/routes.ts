import { CommonRoute } from "../../config/routes";

import MainDashboad from "./MainDashboard";
import PageantManagement from "./PageantManagement";
import EventsManagement from "./EventsManagement";
import ManageSubscription from "./ManageSubscription";
import ManageContestant from "./ManageContestant";
import NewsManagement from "./NewsManagement";
import PrevYearManagement from "./PrevYearManagement";

export const DashboardRoutes = [
  {
    name: "Dashboard Main",
    props: {
      path: CommonRoute.dashboard.main,
      component: MainDashboad,
      exact: true,
    },
  },
  {
    name: "Pageant Management",
    props: {
      path: CommonRoute.dashboard.pageantManagement,
      component: PageantManagement,
      exact: true,
    },
  },
  {
    name: "Events Management",
    props: {
      path: CommonRoute.dashboard.eventsManagement,
      component: EventsManagement,
      exact: true,
    },
  },
  {
    name: "Manage Subscription",
    props: {
      path: CommonRoute.dashboard.eventsManagement,
      component: ManageSubscription,
      exact: true,
    },
  },
  {
    name: "Manage Contestant",
    props: {
      path: CommonRoute.dashboard.eventsManagement,
      component: ManageContestant,
      exact: true,
    },
  },
  {
    name: "News Management",
    props: {
      path: CommonRoute.dashboard.eventsManagement,
      component: NewsManagement,
      exact: true,
    },
  },
  {
    name: "PrevYear Management",
    props: {
      path: CommonRoute.dashboard.eventsManagement,
      component: PrevYearManagement,
      exact: true,
    },
  },
];
