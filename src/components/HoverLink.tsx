import React, { FC, PropsWithChildren } from "react";

const HoverLink: FC<PropsWithChildren> = ({ children }) => {
  return <span className="cursor-pointer hover-link">{children}</span>;
};

export default HoverLink;
