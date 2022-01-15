import {PublicRoute} from "./router/PublicRoute";
import {PrivateRoute} from "./router/PrivateRoute";
import AppRouter from "./router/AppRouter";
import AuthRouter from "./router/AuthRouter";
import {
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/login"
          component={AuthRouter}
          isAuthenticated={user}
        />
        <PrivateRoute
          path="/"
          component={AppRouter}
          isAuthenticated={user}
        />
      </Switch>
    </Router>
  );
};

export default App;
