import { useEffect } from "react";
import { ipcRenderer } from "electron";
import { Scrollbars } from "rc-scrollbars";

import channels from "../../shared/lib/ipc-channels";
import Sidebar from "./components/sidebar/sidebar";
import Navbar from "./components/navbar/navbar";
import { loadTasks } from "./store/actions/tasks";
import { ThemeProvider } from "./contexts/themeContext";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  useEffect(() => {
    // app is ready
    ipcRenderer.send(channels.APP_READY);
    // load all tasks and store them in the store
    (async () => await loadTasks())();
  }, []);

  return (
    <ThemeProvider>
      <div className="h-screen flex bg-slate-200 dark:bg-zinc-800 ">
        <Sidebar />
        {/* navbar and the content */}
        <div className="flex flex-col h-screen w-full">
          <Navbar />
          <div className="flex-1 w-full px-10 py-5 overflow-y-auto">
            <Scrollbars autoHide autoHideTimeout={1000}>
              <main>{children}</main>
            </Scrollbars>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
