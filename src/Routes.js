import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import { Common } from "@components/Common";

const Loading = Common.Loading;

const Index = loadable(() => import("@pages/Index"), {
  fallback: <Loading />,
});

const routes = [
  {
    path: "/",
    component: Index,
    exact: true,
  },
  // {
  //   path: "/admin",
  //   component: AdminPage,
  //   routes: [
  //     {
  //       path: "/admin/user-list",
  //       component: UserList,
  //       exact: true,
  //     },
  //     {
  //       path: "/admin/job-list",
  //       component: JobList,
  //       exact: true,
  //     },
  //   ],
  // },
];

const Routes = () => (
  <Switch>
    {routes.map((route, i) => (
      <RouteWithSubRoutes key={i} {...route} />
    ))}
    <Redirect to="/" />
    <Route component={Index} />
  </Switch>
);

const RouteWithSubRoutes = (route) => {
  return (
    <Switch>
      <Route
        path={route.path}
        render={(props) => <route.component {...props} routes={route.routes} />}
      />
    </Switch>
  );
};

export default Routes;
export { RouteWithSubRoutes };
