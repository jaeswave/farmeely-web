import React from "react";
const Button = (prop) => {
  const { title, className, ...props } = prop;
  return (
    <button
      className={`text-xs font-bold mx-auto min-w-max text-white bg-customBlue  transform transition-transform duration-300 hover:scale-95 px-4 py-2  rounded-full  ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
