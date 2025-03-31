import Nav from "../components/Nav";
import JoinSection from "../components/JoinSection";
import Footer from "../components/Footer";

const Layout = ({ children }) => {
  return (
    <div className="w-full">
      <Nav />
      <main>{children}</main>
      <JoinSection />
      <Footer />
    </div>
  );
};

export default Layout;
