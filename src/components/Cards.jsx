const Card = (props) => {
  const { description, icon,title } = props;
  return (
    
    <div className="flex items-center gap-1 md:gap-4  p-2 md:p-3 bg-customLiteGreen rounded-3xl bg-opacity-[15%]">
      <img src={icon} alt="icon" className="w-5 h-5" />
      <p className="text-center text-md md:text-xs">{description}</p>
    </div>
  );
};

export default Card;
