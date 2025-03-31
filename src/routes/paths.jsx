import Landing from "../screens/Landing";
import AboutUs from "../screens/AboutUs";
import Products from "../screens/Products";
import FAQ from "../screens/FAQ";

const Paths = [
  { path: "/", element: <Landing />, hasLayout: true },
  { path: "/about-us", element: <AboutUs />, hasLayout: true },
  { path: "/products", element: <Products />, hasLayout: true },
  { path: "/faqs", element: <FAQ />, hasLayout: true },
];

export default Paths;
