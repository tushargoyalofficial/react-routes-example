import * as React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "../config/history";
import stackRoutes from "./configs/stackRoutes";

const StackRoutes: React.FC = () => {
  return (
    <Router history={history}>
      <Switch>
        {stackRoutes.map((r) => (
          <Route key={r.id} path={r.path} exact={r.exact} component={r.main} />
        ))}
      </Switch>
    </Router>
  );
};

export default StackRoutes;
