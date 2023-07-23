import React, { ReactNode } from "react";

type Props = {
  onClick: () => void;
  children: ReactNode;
};

export const Button = (props: Props) => {
  const { onClick, children } = props;
  return <button onClick={onClick}>{children}</button>;
};

//export default Button;
