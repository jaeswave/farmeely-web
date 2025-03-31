const TeamCard = ({ image, name, title }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <img src={image} alt={name} className="object-cover h-[70%]" />

      <div className="bg-white border-8 border-t-customSkyblue py-2 px-3">
        <h5 className="font-urbanist font-semibold text-sm md:text-lg">
          {name}
        </h5>
        <h5 className="font-urbanist text-xs md:text-sm">{title}</h5>
      </div>
    </div>
  );
};

export default TeamCard;
