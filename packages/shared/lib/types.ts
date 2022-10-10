import { TASK_STATUS } from "../../shared/constants/TASK_STATUS";

export type task = {
  _id: string;
  text: string;
  description: string;
  status: TASK_STATUS;
  date: number;
};

export type Action = {
  type: string;
  payload?: any;
};
