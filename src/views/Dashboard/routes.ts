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
    name: "Dashboard",
    props: {
      icon: "Icon_Dashboard",
      path: CommonRoute.dashboard.main,
      component: MainDashboad,
      exact: true,
    },
  },
  {
    name: "Pageant Management",
    props: {
      icon: "Icon_PageantManage",
      path: CommonRoute.dashboard.pageantManagement,
      component: PageantManagement,
      exact: true,
    },
  },
  {
    name: "Events Management",
    props: {
      icon: "Icon_EventManage",
      path: CommonRoute.dashboard.eventsManagement,
      component: EventsManagement,
      exact: true,
    },
  },
  {
    name: "Manage Subscription",
    props: {
      icon: "Icon_Subscription",
      path: CommonRoute.dashboard.manageSubscription,
      component: ManageSubscription,
      exact: true,
    },
  },
  {
    name: "Manage Contestant",
    props: {
      icon: "Icon_ContestantManage",
      path: CommonRoute.dashboard.manageContestent,
      component: ManageContestant,
      exact: true,
    },
  },
  {
    name: "News Management",
    props: {
      icon: "Icon_NewsManage",
      path: CommonRoute.dashboard.newsManagement,
      component: NewsManagement,
      exact: true,
    },
  },
  {
    name: "PrevYear Management",
    props: {
      icon: "Icon_PrevYear",
      path: CommonRoute.dashboard.prevYearManagement,
      component: PrevYearManagement,
      exact: true,
    },
  },
];
