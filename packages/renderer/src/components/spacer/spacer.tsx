import React from "react";

interface props {
  vertical?: React.OptionHTMLAttributes<boolean>;
}
const Spacer: React.FC = ({ vertical }: props) => {
  return (
    <div
      className={`${vertical ? "h-5 w-full" : "flex-1 h-full"} draggable`}
    ></div>
  );
};

export default Spacer;
