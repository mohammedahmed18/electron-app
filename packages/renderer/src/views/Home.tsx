import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import TasksList from "../components/tasks-list/TasksList";
import { RootState } from "../store/reducers/root";

const Home: React.FC = () => {
  const { list: tasks, loading } = useSelector(
    (state: RootState) => state.tasks
  );

  useEffect(() => {}, []);
  return (
    <>
      <h1 className="text-3xl text-black/40 dark:text-white/40">All tasks</h1>
      {loading && <span className="font-bold mt-3">loading...</span>}
      {tasks.length === 0 && <p className="text-2xl my-4">No tasks yet</p>}
      <TasksList tasks={tasks} />
    </>
  );
};

export default Home;
