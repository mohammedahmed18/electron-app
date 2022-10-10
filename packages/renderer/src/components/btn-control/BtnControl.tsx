import React from "react";

type props = {
  handleClick: () => void;
  className?: string;
  Icon: React.ComponentType;
};
const ButtonControl = ({ handleClick, className, Icon }: props) => {
  return (
    <button
      className={`btn btn-ghost outline-none active:outline-none focus:outline-none ${className}`}
      onClick={handleClick}
    >
      <Icon />
    </button>
  );
};

export default ButtonControl;
