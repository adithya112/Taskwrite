import React, { ReactNode, useState } from "react";
import Button from "./Button";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { ITask } from "../models/interface";

interface DialogProps {
  setIsViewTask?: (isViewTask: boolean) => void;
  setSearchedTasks?: (searchedTasks: ITask[]) => void;
  children?: ReactNode;
}

function Dialog({ setIsViewTask, setSearchedTasks, children }: DialogProps) {
  const [isOpen, setIsOpen] = useState(true);

  const closeModal = () => {
    if (setIsViewTask) setIsViewTask(false);

    if (setSearchedTasks) setSearchedTasks([]);
    setIsOpen(false);
  };

  return (
    <dialog
      open={isOpen}
      id="modal"
      style={{ backgroundColor: "var(--base-bg)", color: "var(--text-main)" }}
      className={`${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      } transition-opacity duration-300 ease-in-out fixed inset-0`}
    >
      <Button
        handleClick={closeModal}
        icon={<XMarkIcon />}
        extraBtnClasses="ml-auto text-main font-medium hover:text-error"
        title="Close"
      >
        <div className="max-h-[80vh] overflow-y-auto">{children}</div>
      </Button>
    </dialog>
  );
}

export default Dialog;
