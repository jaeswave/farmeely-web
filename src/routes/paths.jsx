import LandingPage from "../screens/LandingPage";
import DashboardPage from "../screens/DashboardPage";
import LoginPage from "../screens/LoginPage";
import SignUpPage from "../screens/SignUpPage";
import NotFound from "../screens/NotFound";
import VerifyEmail from "../screens/VerifyEmail";
import StartForgotPassword from "../screens/StartForgotPassword";
import CompleteForgotPassword from "../screens/CompleteForgetPassword";
import PreferencePage from "../screens/PreferencePage";
import MyVerses from "../components/MyVerses";
import Bookmarks from "../components/Bookmarks";
import DonationPage from "../components/DonationPage";
import UpdatePreference from "../screens/UpdatePreference";

const Paths = [
  { path: "/", element: <LandingPage />, protected: false, layout: false },
  { path: "/login", element: <LoginPage />, protected: false, layout: false },
  { path: "/signup", element: <SignUpPage />, protected: false, layout: false },
  {
    path: "/verify-email",
    element: <VerifyEmail />,
    protected: false,
    layout: false,
  },
  { path: "/404", element: <NotFound />, protected: false, layout: false },
  {
    path: "/donate",
    element: <DonationPage />,
    protected: false,
    layout: false,
  },
  { path: "/my-verses", element: <MyVerses />, protected: true, layout: true },
  { path: "/bookmarks", element: <Bookmarks />, protected: true, layout: true },
  {
    path: "/start-forget-password",
    element: <StartForgotPassword />,
    protected: false,
    layout: false,
  },
  {
    path: "/complete-forget-password",
    element: <CompleteForgotPassword />,
    protected: false,
    layout: false,
  },
  {
    path: "/preference",
    element: <PreferencePage />,
    protected: false,
    layout: true,
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
    protected: true,
    layout: true,
  },
  { path: "/update-preference",
    element: <UpdatePreference />,
    protected: true,
    layout: true
  }
];

export default Paths;
