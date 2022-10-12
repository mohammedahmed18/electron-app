import { useRef, useState } from "react";
import AddTaskButton from "../addTaskButton/AddTaskButton";
import Backdrop from "./backdrop";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { addTask } from "../../store/actions/tasks";

const AddTaskModal = () => {
  const [modalShown, setModalShown] = useState(false);
  const title = useRef<{ value: string }>({ value: "" });
  const description = useRef<{ value: string }>({ value: "" });

  const hideModal = () => {
    setModalShown(false);
  };
  const stopPrpagation = (e: Event) => {
    e.stopPropagation();
  };
  const handleTaskAdded = () => {
    const titleVal = title?.current?.value,
      descVal = description?.current?.value;
    if (
      !titleVal ||
      !descVal ||
      titleVal.trim() === "" ||
      descVal.trim() === ""
    )
      return;
    addTask({ text: titleVal, description: descVal, status: "pending" });
    setModalShown(false);
  };
  return (
    <AnimatePresence initial={false}>
      {modalShown && (
        <Backdrop onClick={hideModal}>
          <motion.div
            onClick={stopPrpagation}
            initial={{ opacity: 0, y: "-50%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-50%" }}
            className="bg-slate-200 dark:bg-zinc-900 text-zinc-800 dark:text-zinc-300 rounded-lg min-w-[500px] px-4 py-7"
          >
            <label>Title</label>
            <input
              ref={title}
              className="input my-2 bg-slate-300/50 dark:bg-zinc-800 w-full"
              type="text"
            />

            <label>description</label>
            <textarea
              ref={description}
              className="input my-2 bg-slate-300/50 dark:bg-zinc-800 w-full resize-none h-40"
            ></textarea>

            <div className="flex justify-between items-center">
              <button className="btn rounded-full" onClick={handleTaskAdded}>
                Add
              </button>
              <button
                className="btn rounded-full btn-ghost"
                onClick={hideModal}
              >
                cancel
              </button>
            </div>
          </motion.div>
        </Backdrop>
      )}
      <AddTaskButton onClick={() => setModalShown(true)} />
    </AnimatePresence>
  );
};

export default AddTaskModal;
