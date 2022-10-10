import React, { useState } from "react";
import SidebarItem from "../sidebar-item/SidebarItem";
import { CgNotes, CgAppleWatch } from "react-icons/cg";
import { AiFillCheckCircle } from "react-icons/ai";
import { TbUrgent } from "react-icons/tb";
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
      ${expanded ? "w-1/4" : "w-20"}
      h-screen bg-zinc-900 flex flex-col
      `}
    >
      <Spacer vertical />
      <ToggleSideBarExpanded
        expanded={expanded}
        toggleExpanded={toggleExpanded}
      />
      <SidebarItem
        Icon={CgNotes}
        label="all tasks"
        link="/"
        expanded={expanded}
      />

      <SidebarItem
        Icon={CgAppleWatch}
        label="pended tasks"
        link="/"
        expanded={expanded}
      />

      <SidebarItem
        Icon={TbUrgent}
        label="urgent tasks"
        link="/"
        expanded={expanded}
      />
      <SidebarItem
        Icon={AiFillCheckCircle}
        label="completed tasks"
        link="/"
        expanded={expanded}
      />
    </div>
  );
};

export default Sidebar;
