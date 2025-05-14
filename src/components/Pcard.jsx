import Button from "./Button";

const PCard = ({ image, title, description, reverse, buttonText }) => {
  return (
    <div className={`flex flex-col md:flex-row ${reverse ? "md:flex-row-reverse" : ""} items-center`}>
      <div className={`w-full border-2 md:w-1/2 ${reverse ? "pl-0 md:pl-16" : "pr-0 md:pr-16"}`}>
        <h3 className="font-urbanist text-2xl font-semibold mb-3">{title}</h3>
        <p className="font-urbanist mb-3 text-sm md:text-lg">{description}</p>
       
        {buttonText && (
        <Button title={buttonText}/>
        )}
      </div>

      <div className="w-full md:w-1/2 flex justify-center">
        <img src={image} alt={title} className="w-[250px] md:w-[350px] object-contain" />
      </div>
    </div>
  );
};

export default PCard;
