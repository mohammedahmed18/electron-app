import * as types from "../action_types";
import { Action, task } from "../../../../shared/lib/types";

export type TaskState = {
  loading: boolean;
  list: task[];
  search: string;
};

const initialState: TaskState = {
  loading: false,
  list: [],
  search: "",
};

export default (state = initialState, action: Action) => {
  switch (action.type) {
    case types.LOAD_TASKS: {
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    }
    case types.ADD_TASK: {
      const list = [action.payload, ...state.list];
      return {
        ...state,
        list,
      };
    }
    default: {
      return state;
    }
  }
};
