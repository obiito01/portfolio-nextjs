import React from "react";
import Image from "next/image";
const SkillItem = ({ title, image }) => {
  return (
    <div className="rounded-md w-full flex flex-col items-center p-4">
      <Image
        src={image}
        alt={title}
        width={180}
        height={180}
        objectFit="contain"
        className="select-none"
      />
      <p className="mt-2 font-medium text-xl select-none text-center">
        {title}
      </p>
    </div>
  );
};

export default SkillItem;
