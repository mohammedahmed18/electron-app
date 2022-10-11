import React from "react";
import Spacer from "../spacer/spacer";
import ThemeToggle from "../theme-toggle/ThemeToggle";
import WindowControls from "../window-controls/WindowControls";
const Navbar: React.FC = () => {
  return (
    <div className="flex dark:bg-zinc-900/60 bg-zinc-900 items-center shadow-md">
      <ThemeToggle />
      <Spacer />
      {/* controls */}
      <WindowControls />
    </div>
  );
};

export default Navbar;
