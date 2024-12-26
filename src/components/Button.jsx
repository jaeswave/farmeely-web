const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-1xl min-w-32 text-customWhite mx-auto bg-customGreen  transform transition-transform duration-300 hover:scale-95 px-4 py-2 rounded-lg  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
