const WhyCard = (props) => {
  const { description, icon, title } = props;
  return (
    <div className="">
      <img src={icon} alt="icon" className="w-10 h-auto" />

      <div className="p-1 md:p-2 bg-customLiteGreen rounded-lg bg-opacity-[15%]">
        <h3 className="text-sm md:text-lg font-semibold md:font-bold  mb-1 md:mb-3">{title}</h3>
        <p className="text-xs md:text-xs">{description}</p>
      </div>
    </div>
  );
};

export default WhyCard;
