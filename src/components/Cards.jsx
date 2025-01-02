const Cards = (prop) => {
  const { data } = prop;
  return (
    <>
      {data.map((card) => (
        <div
          key={card.id}
          className={`p-12 rounded-lg shadow-lg ${card.bgColor} ${card.textColor} hover:shadow-lg transition-all`}
        >
          <div className="flex items-center justify-start space-x-4 mb-4">
            <div
              className={`h-12 w-12 flex items-center justify-center rounded-full  ${card.iconBgColor}`}
            >
              <span className="text-2xl">{card.icon}</span>
            </div>
          </div>
          <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
          <p className="text-base mb-4 w-[80%]">{card.description}</p>
          <a
            href="#"
            className={`text-sm font-medium underline ${card.linkTextColor}`}
          >
            {card.link}
          </a>
        </div>
      ))}
    </>
  );
};

export default Cards;
