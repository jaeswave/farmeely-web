import logo from "../../assets/images/slide.png";

const LogoAnimate = () => {
  const logos = new Array(14).fill(logo);

  return (
    <div className="w-full h-[10vh] flex items-center overflow-hidden bg-customSkyblue bg-opacity-[5%]">
      <div className="flex min-w-fit animate-scroll-left">
        {[...logos, ...logos].map((imgSrc, index) => (
          <img
            key={index}
            src={imgSrc}
            alt={`logo-${index}`}
            className="h-10 mx-4 shrink-0"
          />
        ))}
      </div>
    </div>
  );
};

export default LogoAnimate;
