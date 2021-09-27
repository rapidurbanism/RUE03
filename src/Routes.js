import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import loadable from "@loadable/component";
import { Common } from "@components/Common";
import DocsWrapper from '@components/DocsWrapper';
import Installation from "@components/preprocessed/Installation";
import TermsConds from "@components/preprocessed/TermsConds";
import UserManual from "@components/preprocessed/UserManual";

const Loading = Common.Loading;

const Index = loadable(() => import("@pages/Index"), {
  fallback: <Loading />,
});

const publicRoutes = [
  {
    path: "/docs/installation",
    component: ()=><DocsWrapper component={<Installation />} pageTitle="RUE Installation"/>,
    exact: true
  },
  {
    path: "/docs/termsandconditions",
    component: ()=><DocsWrapper component={<TermsConds />} pageTitle="RUE Terms and Conditions"/>,
    exact: true
  },
  {
    path: "/docs/usermanual",
    component: ()=><DocsWrapper component={<UserManual />} pageTitle="RUE User Manual"/>,
    exact: true
  },
];

const Routes = () => (
  <Switch>
    <Route path="/" component={Index} />
    <Redirect to="/" />
  </Switch>
);

export const PublicRoutes = () => (
  <Switch>
    {
      publicRoutes.map(
        (route, i) => (
          <Route key={i} component={route.component} path={route.path} exact={route.exact}/>
        )
      )
    }
    <Redirect to="/" />
  </Switch>
)

export default Routes;
