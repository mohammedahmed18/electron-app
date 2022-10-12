import React from "react";

type props = {
  children: React.ReactNode;
  onClick: () => void;
};
const Backdrop = ({ children, onClick }: props) => {
  return (
    <div
      onClick={onClick}
      className="fixed inset-0 z-[99999999999] bg-black/50 backdrop-blur-sm flex flex-col justify-center items-center"
    >
      {children}
    </div>
  );
};

export default Backdrop;
