import { useEffect } from "react";
import { ipcRenderer } from "electron";
import channels from "../../shared/lib/ipc-channels";
import "./App.css";
function App() {
  useEffect(() => {
    // app is ready
    ipcRenderer.send(channels.APP_READY);
  }, []);
  return <div></div>;
}

export default App;
