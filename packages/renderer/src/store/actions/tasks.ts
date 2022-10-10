import store from "../store";
import * as types from "../action_types";
import { ipcRenderer } from "electron";
import channels from "../../../../../packages/shared/lib/ipc-channels";

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
