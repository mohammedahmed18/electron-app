import React from "react";
import Spacer from "../spacer/spacer";
import WindowControls from "../window-controls/WindowControls";

const Navbar: React.FC = () => {
  return (
    <div className="flex bg-zinc-900 items-center shadow-md">
      <Spacer />
      {/* controls */}
      <WindowControls />
    </div>
  );
};

export default Navbar;
