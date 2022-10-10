import { TbArrowLeftCircle } from "react-icons/tb";

type props = {
  expanded: boolean;
  toggleExpanded: () => void;
};
const ToggleSideBarExpanded = ({ expanded, toggleExpanded }: props) => {
  return (
    <button
      onClick={toggleExpanded}
      className={`ml-auto btn-ghost w-10 h-10 mr-4 btn-sm rounded-full mb-4
      duration-500
        ${!expanded ? "rotate-180" : null}
        `}
    >
      <TbArrowLeftCircle />
    </button>
  );
};

export default ToggleSideBarExpanded;
