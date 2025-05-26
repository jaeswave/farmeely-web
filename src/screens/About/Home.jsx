const Home = () => {
  return (
    <section className="font-poppins">
      <div className="flex items-center justify-center mt-5 w-[95%] mx-auto bg-about-bg bg-cover bg-center rounded-3xl h-[60vh]">
        <h1 className="text-3xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-customLiteGreen via-white to-customLiteGreen bg-clip-text text-transparent animate-fadeIn drop-shadow-2xl">
          About <span className="italic tracking-wide">FARMEELY</span>
        </h1>
      </div>
      <div className="w-[80%] mx-auto mt-10">
        <h1 className="text-2xl md:text-4xl font-bold text-customLiteGreen text-center">Connecting Communities Through Shared Buying</h1>
        <p className="text-sm md:text-md mt-5 leading-[1.5rem] md:leading-[3rem] text-center">
          Lorem ipsum dolor sit amet consectetur. Sollicitudin quis egestas cras
          etiam. Tempus vel integer risus morbi euismod quis. Nascetur enim
          tortor mauris enim non posuere. Mattis volutpat massa condimentum
          gravida dolor nunc etiam. Dui condimentum eget ullamcorper dui
          malesuada vulputate ullamcorper quam eu. Cursus et lacus in dui vel
          euismod sed metus. Iaculis dolor convallis duis sed massa.
        </p>
      </div>
    </section>
  );
};

export default Home;
