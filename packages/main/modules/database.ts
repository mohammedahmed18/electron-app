import Module from "./module";
import Realm from "realm";
import { TASK_COLLECTION } from "../../shared/constants/collections";
import path from "path";
import { app } from "electron";

export default class Database extends Module {
  public db = null;
  async load(): Promise<void> {
    const TaskSchema = {
      name: TASK_COLLECTION,
      properties: {
        _id: "objectId",
        text: "string",
        status: "string",
        description: "string",
        date: "int",
      },
      primaryKey: "_id",
    };
    const db = await Realm.open({
      schema: [TaskSchema],
      deleteRealmIfMigrationNeeded: true,
      path: path.join(app.getPath("userData"), "db.realm"),
    });

    this.db = db;
  }

  async close(): Promise<void> {
    return await this.db.close();
  }
}
