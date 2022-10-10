import { Link } from "react-router-dom";
import Tooltip from "../tooltip/tooltip";
type props = {
  Icon: React.ComponentType;
  label: string;
  link: string;
  expanded: boolean;
  color?: "success" | "error" | "warning" | "primary";
};
const SidebarItem = ({ Icon, label, link, color, expanded }: props) => {
  const jsx = (
    <div>
      <Link
        to={link}
        className="flex py-3 px-4 whitespace-nowrap overflow-hidden space-x-3 items-center text-lg hover:bg-zinc-800 hover:opacity-100 opacity-75 mx-4 rounded-lg duration-300 mb-2"
      >
        <span className={`text-${color}`}>
          <Icon />
        </span>

        {expanded && <span className="font-medium">{label}</span>}
      </Link>
    </div>
  );
  return expanded ? jsx : <Tooltip text={label}>{jsx}</Tooltip>;
};

export default SidebarItem;
