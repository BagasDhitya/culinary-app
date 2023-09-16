import React, { FC } from "react";

import { Button } from "@/utils/component";

const Button: FC<Button> = ({ id, label, onClick }) => {
  return (
    <a
      id={id}
      onClick={onClick}
      className="w-full h-full bg-culinary-amber-500 rounded-md flex justify-center items-center hover:bg-culinary-amber-600 focus:outline-none border-none cursor-pointer"
    >
      <label className="font-semibold text-white">{label}</label>
    </a>
  );
};

export default Button;
