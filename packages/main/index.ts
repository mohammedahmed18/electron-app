// packages/main/src/index.ts
import { app, BrowserWindow } from "electron";
import path from "path";

const isSingleInstance = app.requestSingleInstanceLock();

if (!isSingleInstance) {
  app.quit();
  process.exit(0);
}

const appRoot = path.resolve(__dirname, ".."); // Careful, not future-proof

const rendererDistPath = path.join(appRoot, "renderer");
const preloadDistPath = path.join(appRoot, "preload");

async function createWindow() {
  const browserWindow = new BrowserWindow({
    show: false,
    width: 1200,
    height: 768,
    webPreferences: {
      webviewTag: false,
      // Electron current directory will be at `dist/main`, we need to include
      // the preload script from this relative path: `../preload/index.cjs`.
      preload: path.join(__dirname, "../preload/index.cjs"),
    },
  });

  // If you install `show: true` then it can cause issues when trying to close the window.
  // Use `show: false` and listener events `ready-to-show` to fix these issues.
  // https://github.com/electron/electron/issues/25012
  browserWindow.on("ready-to-show", () => {
    browserWindow?.show();
  });

  // Define the URL to use for the `BrowserWindow`, depending on the DEV env.
  //   const pageUrl = import.meta.env.DEV
  //     ? "http://localhost:3000"
  //     : new URL("../dist/renderer/index.html", `file://${__dirname}`).toString();

  let url: string;

  if (process.env.VITE_DEV_SERVER_URL) {
    url = `${process.env.VITE_DEV_SERVER_URL}`;
  } else {
    url = `file://${rendererDistPath}/index.html`;
  }

  await browserWindow.loadURL(url);
  return browserWindow;
}

app.on("second-instance", () => {
  createWindow().catch((err) =>
    console.error(
      "Error while trying to prevent second-instance Electron event:",
      err
    )
  );
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  createWindow().catch((err) =>
    console.error("Error while trying to handle activate Electron event:", err)
  );
});

app
  .whenReady()
  .then(createWindow)
  .catch((e) => console.error("Failed to create window:", e));
