import store from "../store";
import * as types from "../action_types";
import { ipcRenderer } from "electron";
import channels from "../../../../../packages/shared/lib/ipc-channels";
import { task } from "../../../../../packages/shared/lib/types";

export const loadTasks = async () => {
  store.dispatch({
    type: types.START_TASKS_LOADING,
  });
  const tasks = await ipcRenderer.invoke(channels.GET_TASKS);

  store.dispatch({
    type: types.LOAD_TASKS,
    payload: tasks,
  });
};

export const addTask = async (task: task) => {
  const newTask = await ipcRenderer.invoke(channels.ADD_TASK, task);
  // task is addedd now update the ui
  store.dispatch({
    type: types.ADD_TASK,
    payload: JSON.parse(newTask),
  });
};
