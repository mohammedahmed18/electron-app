import React, { useState } from "react";

type props = {
  children: React.ReactNode;
  text: string;
};
const Tooltip = ({ children, text }: props) => {
  const [active, setActive] = useState(false);
  return (
    <span
      className="relative overflow"
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}
    >
      <span
        className={`absolute rounded-lg text-white bg-black z-50 shadow-md left-full whitespace-nowrap px-3 py-1 top-1/2 -translate-y-1/2 ${
          active ? "inline-block" : "hidden"
        }`}
      >
        {text}
      </span>
      {children}
    </span>
  );
};

export default Tooltip;
