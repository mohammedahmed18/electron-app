import React from "react";

interface props {
  vertical?: boolean;
}
const Spacer = ({ vertical }: props) => {
  return (
    <div
      className={`${vertical ? "h-10 w-full" : "flex-1 h-full"} draggable`}
    ></div>
  );
};

export default Spacer;
