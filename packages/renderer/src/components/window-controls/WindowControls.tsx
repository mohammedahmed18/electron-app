import { ipcRenderer } from "electron";
import ButtonControl from "../btn-control/BtnControl";
import { FiMinus, FiMaximize, FiMinimize, FiX } from "react-icons/fi";

import channels from "../../../../shared/lib/ipc-channels";
import { useEffect, useState } from "react";
const WindowControls = () => {
  const [maximized, setMaximized] = useState(false);
  // ///////////////////
  const onWindowMinimize = () => {
    ipcRenderer.send(channels.WINDOW_MINIMIZE);
  };
  const onWindowMaximize = () => {
    ipcRenderer.send(channels.WINDOW_MAXIMIZE);
    setMaximized((prev) => !prev);
  };
  const onWindowClose = () => {
    ipcRenderer.send(channels.WINDOW_CLOSE);
  };

  const onWindowSizeChange = (e: Event, param: { maximized: boolean }) => {
    setMaximized(param.maximized);
  };
  // ////////////////////
  useEffect(() => {
    ipcRenderer.on("size_changed", onWindowSizeChange);
  }, []);
  // ////////////////////
  return (
    <div className="flex space-x-3 mx-1">
      <ButtonControl Icon={FiMinus} handleClick={onWindowMinimize} />
      <ButtonControl
        Icon={maximized ? FiMinimize : FiMaximize}
        handleClick={onWindowMaximize}
      />
      <ButtonControl Icon={FiX} handleClick={onWindowClose} />
    </div>
  );
};

export default WindowControls;
