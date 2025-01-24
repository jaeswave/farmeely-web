import Navbar from "./Navbar";
import Footer from "./Footer"

const DashboardLayout = (prop) => {
  const { children } = prop;
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="p-6">{children}</main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;
