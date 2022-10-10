import { ipcRenderer } from "electron";
import ButtonControl from "../btn-control/BtnControl";
import {
  FaWindowMinimize,
  FaWindowMaximize,
  FaWindowClose,
} from "react-icons/fa";
import channels from "../../../../shared/lib/ipc-channels";
const WindowControls = () => {
  const onWindowMinimize = () => {
    ipcRenderer.send(channels.WINDOW_MINIMIZE);
  };
  const onWindowMaximize = () => {
    ipcRenderer.send(channels.WINDOW_MAXIMIZE);
  };
  const onWindowClose = () => {
    ipcRenderer.send(channels.WINDOW_CLOSE);
  };
  return (
    <div className="flex space-x-3 mx-1">
      <ButtonControl Icon={FaWindowMinimize} handleClick={onWindowMinimize} />
      <ButtonControl Icon={FaWindowMaximize} handleClick={onWindowMaximize} />
      <ButtonControl Icon={FaWindowClose} handleClick={onWindowClose} />
    </div>
  );
};

export default WindowControls;
