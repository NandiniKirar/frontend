import React from "react";

const SelectsCard = (props) => {
  return (
    <div className="relative group">
      <img
        className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform group-hover:scale-105 group-hover:shadow-2xl"
        src={props.bg}
        alt="Maldives"
      />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default SelectsCard;
