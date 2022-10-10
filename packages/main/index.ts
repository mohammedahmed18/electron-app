import path from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import channels from "../shared/lib/ipc-channels";
const appRoot = path.resolve(__dirname, ".."); // Careful, not future-proof

const rendererDistPath = path.join(appRoot, "renderer");
const preloadDistPath = path.join(appRoot, "preload");

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
let mainWindow: Electron.BrowserWindow | null = null;

// Quit when all windows are closed
app.on("window-all-closed", () => {
  app.quit();
});

// This method will be called when Electron has finished its
// initialization and ready to create browser windows.
app.on("ready", async () => {
  // Create the browser window
  mainWindow = new BrowserWindow({
    title: "Todo app",
    width: 1235,
    height: 700,
    minWidth: 900,
    minHeight: 550,
    frame: false,
    autoHideMenuBar: true,
    titleBarStyle: "hiddenInset", // MacOS polished window
    show: false,
    maximizable: true,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      autoplayPolicy: "no-user-gesture-required",
      webSecurity: process.env.VITE_DEV_SERVER_URL == null, // FIXME
      preload: path.join(preloadDistPath, "index.js"),
    },
  });

  // Open dev tools if museeks runs in debug or development mode

  if (
    process.argv.includes("--devtools") ||
    process.env.NODE_ENV === "development" ||
    process.env.VITE_DEV_SERVER_URL
  ) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  mainWindow.on("closed", () => {
    // Dereference the window object
    mainWindow = null;
  });

  // Prevent webContents from opening new windows (e.g ctrl-click on link)
  mainWindow.webContents.setWindowOpenHandler(() => {
    return { action: "deny" };
  });

  let url: string;

  if (process.env.VITE_DEV_SERVER_URL) {
    url = `${process.env.VITE_DEV_SERVER_URL}`;
  } else {
    url = `file://${rendererDistPath}/index.html`;
  }

  mainWindow.loadURL(url);

  // only show the window when the app is ready , this will prevent the white flash problem
  ipcMain.on(channels.APP_READY, () => {
    if (mainWindow) {
      mainWindow.show();
    }
  });

  // for minimizing the window from the renderer
  ipcMain.on(channels.WINDOW_MINIMIZE, () => {
    if (mainWindow) {
      mainWindow.minimize();
    }
  });

  // for maximizing the window from the renderer
  ipcMain.on(channels.WINDOW_MAXIMIZE, () => {
    if (mainWindow) {
      mainWindow.isMaximized() ? mainWindow.restore() : mainWindow.maximize();
    }
  });

  // for closing the window from the renderer
  ipcMain.on(channels.WINDOW_CLOSE, () => {
    if (mainWindow) {
      app.exit(0);
    }
  });

  const gotTheLock = app.requestSingleInstanceLock();

  app.on("second-instance", () => {
    // Someone tried to run a second instance, we should focus our window.
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  if (!gotTheLock) {
    app.quit();
  }

  // ModulesManager.init(
  //   new AppModule(mainWindow, configModule),
  //   new PowerModule(mainWindow),
  //   new ApplicationMenuModule(mainWindow),
  //   new TrayModule(mainWindow),
  //   new ThumbarModule(mainWindow),
  //   new DockMenuModule(mainWindow),
  //   new SleepBlockerModule(mainWindow),
  //   new DialogsModule(mainWindow),
  //   new NativeThemeModule(mainWindow, configModule),
  //   new DevtoolsModule(mainWindow),
  //   // Modules used to handle IPC APIs
  //   new IPCCoverModule(mainWindow),
  //   new IPCLibraryModule(mainWindow)
  // )
});
