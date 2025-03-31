const BenefitCard = (props) => {
  const { number, icon, title, description,className } = props;
  return (
    <div className={`relative bg-white px-6 md:py-5 xl:py-10  text-center ${className}`}>
      <div className="absolute top-6 left-16 transform -translate-x-1/2 text-7xl font-bold text-gray-200 opacity-50">
        0{number}
      </div>

      <div className="relative left-3 top-10">
        <img src={icon} alt={title} className="w-15 h-12 font-extrabold " />
      </div>

      <h4 className="md:w-[65%] font-semibold text-normal md:text-lg mt-16 text-start font-urbanist">
        {title}
      </h4>
      <p className="text-gray-600 mt-1 text-xs md:text-sm text-start font-outfit">
        {description}
      </p>
    </div>
  );
};

export default BenefitCard;
