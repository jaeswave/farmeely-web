const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-xs font-bold mx-auto min-w-max text-white bg-customSkyblue transform transition-transform duration-300 hover:scale-95 px-6 py-3 inline-block  rounded-full  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;



