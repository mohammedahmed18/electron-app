import { TASK_STATUS } from "../../shared/constants/TASK_STATUS";

export type task = {
  _id?: string;
  date?: number;
  text: string;
  description: string;
  status: `${TASK_STATUS}`;
};

export type Action = {
  type: string;
  payload?: any;
};
