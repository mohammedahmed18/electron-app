import { contextBridge, shell } from "electron";

contextBridge.exposeInMainWorld("__app", {
  openExternalUrl: (url: string) => shell.openExternal(url),
});
