import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { RootState } from "../../redux/store";

interface PrivateRouteProps {
  element: JSX.Element;
}

const PrivateRoute = ({ element }: PrivateRouteProps) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const isAuthenticated = user ? true : false;

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return element;
};

export default PrivateRoute;
