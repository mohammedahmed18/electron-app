import { useEffect } from "react";
import { ipcRenderer } from "electron";
import channels from "../../shared/lib/ipc-channels";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import "./App.css";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  useEffect(() => {
    // app is ready
    ipcRenderer.send(channels.APP_READY);
  }, []);
  return (
    <div className="h-screen flex bg-zinc-800">
      <Sidebar />
      {/* navbar and the content */}
      <div className="flex flex-col h-screen w-full">
        <Navbar />

        <div className="flex-1 w-full px-10 py-5 overflow-y-auto">
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}

export default App;
