import React, { ReactNode } from "react";

type Props = {
  onClick: () => any;
  children: ReactNode;
};

export const Button = (props: Props) => {
  const { onClick, children } = props;

  return (
    <>
      <button
        onClick={onClick}
        className="bg-orange-500 text-white h-32 w-32 font-bold rounded-full"
      >
        {children}
      </button>
    </>
  );
};

//export default Button;
