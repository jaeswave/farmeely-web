import React from "react";

const Card = (props) => {
  const { icon, title, description } = props;
  return (
    <div className="bg-cardBlue p-8 rounded-2xl shadow-md text-center ">
      <div className="place-self-center mb-8 text-6xl text-customBlue">
        <img src={icon} alt={title} className="w-15 h-12 font-extrabold " />
      </div>
      <h3 className="font-bold font-urbanist text-lg mt-3">{title}</h3>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default Card;
