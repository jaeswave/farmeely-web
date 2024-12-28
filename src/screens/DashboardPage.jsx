const DashboardPage = () => {
  return (
    <section className="px-4">
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold text-center my-8">
          Assalamu Alaikum, Khadijah!
        </h1>
        <p>Your next Quranic verse is scheduled for 08:00am</p>

        <div className="grid lg:grid-cols-3 lg:grid-rows-3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPage;
