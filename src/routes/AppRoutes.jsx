import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LandingPage from "../screens/LandingPage";
import DashboardPage from "../screens/DashboardPage";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";
import NotFound from "../screens/NotFound";
import DashboardLayout from "../Layouts/DashboardLayout";
import OtpPage from "../screens/OtpPage";
import StartForgotPassword from "../screens/StartForgotPassword";
import CompleteForgotPassword from "../screens/CompleteForgetPassword";
import PreferencePage from "../screens/PreferencePage";

function PrivateRoute(prop) {
  const { children } = prop;
  const isAuthenticated = localStorage.getItem("authToken");
  return isAuthenticated ? children : <Navigate to="/login" />;
}

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/Otp" element={<OtpPage />} />
        <Route path="/404" element={<NotFound />} />
        <Route
          path="/start-forget-password"
          element={<StartForgotPassword />}
        />
        <Route
          path="/complete-forget-password"
          element={<CompleteForgotPassword />}
        />

        <Route path="/preference" element={<PreferencePage />} />

        <Route
          path="/dashboard"
          element={
            //<PrivateRoute>
            <DashboardLayout>
              <DashboardPage />
            </DashboardLayout>
            //</PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
