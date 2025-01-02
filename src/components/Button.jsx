const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-xs   font-bold w-16 md:w-32 mx-auto text-customWhite bg-customGreen  transform transition-transform duration-300 hover:scale-95 px-1 py-3  md:px-4  rounded-lg  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
