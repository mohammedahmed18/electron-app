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
      <h1 className="text-3xl text-white/40">All tasks</h1>
      <TasksList tasks={tasks} />
    </>
  );
};

export default Home;
