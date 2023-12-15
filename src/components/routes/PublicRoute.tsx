import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { RootState } from "../../redux/store";

interface PublicRouteProps {
  element: JSX.Element;
}

const PublicRoute = ({ element }: PublicRouteProps) => {
  const user = useSelector((state: RootState) => state.user.currentUser);
  const isAuthenticated = user ? true : false;

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return element;
};

export default PublicRoute;
