import * as React from "react";
import { Switch, Route, Router, Redirect } from "react-router-dom";
import drawerRoutes from "./configs/drawerRoutes";
import history from "../config/history";

const DrawerRoutes: React.FC = () => {
  const isAuthenticated: boolean = true;

  return (
    <Router history={history}>
      <Switch>
        {drawerRoutes.map((r) => (
          <Route
            key={r.id}
            path={r.path}
            exact={r.exact}
            render={() =>
              isAuthenticated ? <r.main /> : <Redirect to={"/"} />
            }
          />
        ))}
      </Switch>
    </Router>
  );
};

export default DrawerRoutes;
