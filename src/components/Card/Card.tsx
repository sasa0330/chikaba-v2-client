import React, { ReactNode } from "react";

type Props = {
  imgAttr: {
    src: string;
    alt: string;
  };
  contents: ReactNode;
};
export const Card = (props: Props) => {
  const { imgAttr, contents } = props;
  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 mb-3 p-1">
      <img
        className="object-cover rounded-t-lg w-1/3"
        src={imgAttr.src}
        alt={imgAttr.alt}
      ></img>
      <div className="object-cover rounded-t-lg w-2/3 ml-2">{contents}</div>
    </div>
  );
};
