import Navbar from "./Navbar";

const DashboardLayout = (prop) => {
  const { children } = prop;
  return (
    <div className="mx-auto">
      <Navbar />
      <main className="p-6">{children}</main>
    </div>
  );
};

export default DashboardLayout;
