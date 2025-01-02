import Button from "./Button";
import { useNavigate } from "react-router-dom";

const QuickAccessCard = (prop) => {
  const {
    title,
    description,
    icon,
    bgColor,
    buttonText,
    buttonBgColor,
    routePath,
  } = prop;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(routePath);
  };

  return (
    <div
      className={`p-6 rounded-xl flex items-center justify-between shadow-md ${bgColor}`}
    >
      <div>
        <h2 className="text-xl font-bold text-gray-800">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        <Button
          onClick={handleButtonClick}
          title={buttonText}
          className={`mt-4 ${buttonBgColor} !text-white !px-4 !py-2 !rounded-md !text-sm shadow-sm hover:${buttonBgColor}`}
        />
      </div>
      <div className="flex items-center justify-center mt-[4.5rem]">
        <img src={icon} alt="Card Icon" className="w-[5.5rem] h-16" />{" "}
      </div>
    </div>
  );
};

export default QuickAccessCard;
