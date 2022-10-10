import { ipcMain } from "electron";
import Realm from "realm";
import { TASK_COLLECTION } from "../../shared/constants/collections";
import channels from "../../shared/lib/ipc-channels";
import { task } from "../../shared/lib/types";
import Module from "./module";

export default class Task extends Module {
  private db;
  constructor(db) {
    super();
    this.db = db;
  }
  async load(): Promise<void> {
    // get all tasks
    ipcMain.handle(channels.GET_TASKS, async (e: Event) => {
      const tasks = await this.db.objects(TASK_COLLECTION);

      return tasks.toJSON();
    });

    // this.db.write(() => {
    //   this.db.create(TASK_COLLECTION, {
    //     _id: new Realm.BSON.ObjectID(),
    //     date: new Date().valueOf(),
    //     text: "learn electron js",
    //     status: "urgent",
    //     description:
    //       "electron js is a javascript library for building desktop apps using html and css and javascript and ofcourse any framework or library for user interfaces like react / angular / vue",
    //   });
    // });

    // add a new task
    ipcMain.handle(channels.ADD_TASK, async (e: Event, task: task) => {
      this.db.write(() => {
        const createdTask = this.db.create(TASK_COLLECTION, {
          _id: new Realm.BSON.ObjectID(),
          date: new Date(),
          ...task,
        });
        return createdTask;
      });
    });
  }
}
