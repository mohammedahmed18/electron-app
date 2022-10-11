import { Link } from "react-router-dom";
import Tooltip from "../tooltip/tooltip";
type props = {
  Icon: React.ComponentType;
  label: string;
  link: string;
  expanded: boolean;
  className?: string;
};
const SidebarItem = ({ Icon, label, link, expanded, className }: props) => {
  const jsx = (
    <Link
      to={link}
      className={`flex items-center py-3 px-4 whitespace-nowrap overflow-hidden space-x-3 text-lg hover:bg-zinc-800 hover:opacity-100 opacity-75 mx-4 rounded-lg duration-300 mb-2 ${className}`}
    >
      <span>
        <Icon />
      </span>
      {expanded && <span className="font-medium">{label}</span>}
    </Link>
  );
  return expanded ? jsx : <Tooltip text={label}>{jsx}</Tooltip>;
};

export default SidebarItem;
