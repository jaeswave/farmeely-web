import Landing from "../screens/Landing";
import About from "../screens/About";
import Contact from "../screens/Contact";

const Paths = [
  { path: "/", element: <Landing />, hasLayout: true },
  { path: "/about-us", element: <About />, hasLayout: true },
  { path: "/contact-us", element: <Contact />, hasLayout: true },
];

export default Paths;
