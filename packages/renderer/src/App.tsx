import { useEffect } from "react";
import { ipcRenderer } from "electron";
import channels from "../../shared/lib/ipc-channels";
import "./App.css";
declare global {
  interface Window {
    __electron?: any;
  }
}
function App() {
  useEffect(() => {
    // app is ready
    ipcRenderer.send(channels.APP_READY);
    console.log("app is ready");
  }, []);
  return (
    <div className="App">
      <h1>platform: {window.__electron.platform} </h1>
    </div>
  );
}

export default App;
