const HowItWorksCard = (props) => {
  const { image, number, title, description } = props;
  return (
    <div
      className="relative p-4  rounded-3xl bg-gray-100"
    >
      <div className="absolute text-[100px] font-bold text-black/10 top-0 right-4 z-20">
        {number}
      </div>

      <div className="relative z-10">
        <img src={image} alt="step" className="w-[100%] h-auto" />

        <div className="text-center mt-3">
          <h2 className="text-lg font-semibold mb-2">{title}</h2>
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorksCard;
