import React from "react";
import { task } from "../../../../shared/lib/types";
import TaskItem from "../task-item/TaskItem";
type props = {
  tasks: task[];
};
const TasksList = ({ tasks }: props) => {
  return (
    <div className="flex flex-col py-5">
      {tasks.map((task) => (
        <TaskItem task={task} key={task.date} />
      ))}
    </div>
  );
};

export default TasksList;
