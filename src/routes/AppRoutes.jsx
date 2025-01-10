import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Paths from "./paths";
import DashboardLayout from "../Layouts/DashboardLayout";

function PrivateRoute({ children }) {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {Paths.map((route, index) => {
          const Element = route.protected ? (
            <PrivateRoute>{route.element}</PrivateRoute>
          ) : (
            route.element
          );

          return (
            <Route
              key={index}
              path={route.path}
              element={
                route.layout ? (
                  <DashboardLayout>{Element}</DashboardLayout>
                ) : (
                  Element
                )
              }
            />
          );
        })}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
