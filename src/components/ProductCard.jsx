
const ProductCard = (props) => {
    const { image, title, description, features, reverse } = props
  return (
    <div
      className={`flex flex-col md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } items-center justify-center gap-6`}
    >
      <div className={`w-full md:w-1/2  ${reverse ? "pl-0 md:pl-16" : "" }`}>
        <h3 className="font-urbanist text-1xl md:text-2xl font-semibold mb-3">{title}</h3>
        <p className="font urbanist font-semibold mb-3 text-[0.8rem] md:text-[1.1rem]">{description}</p>
        <ul className="list-disc list-inside text-xs md:text-sm">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="w-full md:w-1/2 place-items-center">
        <img
          src={image}
          alt={title}
          className=" object-cover rounded-lg"
        />
      </div>
    </div>
  );
};

export default ProductCard;
