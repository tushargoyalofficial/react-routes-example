import * as React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import stackRoutes from "./configs/stackRoutes";

const StackRoutes: React.FC = () => {
  return (
    <Router>
      <Switch>
        {stackRoutes.map((r) => (
          <Route key={r.id} path={r.path} exact={r.exact} component={r.main} />
        ))}
      </Switch>
    </Router>
  );
};

export default StackRoutes;
