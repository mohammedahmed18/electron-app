import * as types from "../action_types";
import { Action, task } from "../../../../shared/lib/types";

export type TaskState = {
  loading: boolean;
  list: task[];
};

const initialState: TaskState = {
  loading: false,
  list: [],
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

    default: {
      return state;
    }
  }
};
