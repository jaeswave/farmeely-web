const Card = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="p-8 rounded-2xl text-start border-2">
      <div className="place-self-start mb-8 text-6xl text-customBlue">
        <img src={icon} alt={title} className="w-15 h-12 font-extrabold " />
      </div>
      <h3 className="font-bold font-urbanist text-lg mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
