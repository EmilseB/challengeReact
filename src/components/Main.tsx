import React, { useState } from "react";
import NavLinks from "./NavLinks";
import InputText from "./InputText";
import TaskList from "./TaskList";

const Main = () => {
  const [taskListTitle, setTaskListTitle] = useState("All Task");
  const [taskData, setTaskData] = useState<string[]>([]);

  const addTaskData = (newTask: string) => {
    setTaskData([...taskData, newTask]);
  };

  return (
    <>
      <NavLinks setTaskListTitle={setTaskListTitle} />
      <InputText onSubmit={addTaskData} />
      <TaskList title={taskListTitle} tasks={taskData} />
    </>
  );
};

export default Main;
