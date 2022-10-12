import { task } from "../../../../../packages/shared/lib/types";
import { motion } from "framer-motion";
type props = {
  task: task;
};
const TaskItem = ({ task }: props) => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: 0 }}
      className="shadow-xl p-4 rounded-lg mb-4 flex flex-col justify-between"
    >
      <div className="flex items-center space-x-3">
        <h2 className="font-medium text-zinc-800 dark:text-zinc-300 text-xl">
          {task.text}
        </h2>
        <span className={task.status}>{task.status}</span>
      </div>
      <p className="mt-3 text-zinc-700 dark:text-zinc-500 leading-loose">
        {task.description}
      </p>
      <span className="mt-4 p-2 rounded-lg text-cyan-700 bg-cyan-900/10 inline mr-auto">
        {new Date(task.date).toDateString()}
      </span>
    </motion.div>
  );
};

export default TaskItem;
