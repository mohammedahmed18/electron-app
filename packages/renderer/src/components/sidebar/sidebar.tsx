import React, { useState } from "react";
import SidebarItem from "../sidebar-item/SidebarItem";

import { FiFileText, FiCheck, FiWatch, FiBell } from "react-icons/fi";

import Spacer from "../spacer/spacer";
import ToggleSideBarExpanded from "../toggle-sidebar-expanded/ToggleSideBarExpanded";
const Sidebar: React.FC = () => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <div
      className={`
      duration-500
      transition-[width]
      dark:bg-zinc-900/60 bg-zinc-900 
      ${expanded ? "w-1/4" : "w-20 items-center"}
      h-screen flex flex-col
      relative
      `}
    >
      <Spacer vertical />
      <ToggleSideBarExpanded
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />

      <SidebarItem
        Icon={FiFileText}
        label="all tasks"
        link="/"
        expanded={expanded}
      />

      <SidebarItem
        Icon={FiWatch}
        label="pended tasks"
        link="/"
        expanded={expanded}
      />

      <SidebarItem
        Icon={FiBell}
        label="urgent tasks"
        link="/"
        expanded={expanded}
      />
      <SidebarItem
        Icon={FiCheck}
        label="completed tasks"
        link="/"
        expanded={expanded}
      />
    </div>
  );
};

export default Sidebar;
