import { FiPlus } from "react-icons/fi";
// import Tooltip from "../tooltip/tooltip";
type props = {
  onClick: () => void;
};
const AddTaskButton = ({ onClick }: props) => {
  return (
    // <Tooltip text="add a new task">
    <button
      onClick={onClick}
      className="absolute bottom-5 right-5 btn rounded-full z-[999999] bg-zinc-800 dark:bg-zinc-900"
    >
      <FiPlus />
    </button>
    // </Tooltip>
  );
};

export default AddTaskButton;
