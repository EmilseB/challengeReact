import React from "react";

interface TaskListProps {
  title: string;
  tasks: string[];
}

const TaskList: React.FC<TaskListProps> = ({ title, tasks }) => {
  const renderItem = (task: string) => {
    return (
      <div style={styles.taskContainer}>
        <input type="checkbox" style={styles.checkbox} />
        <span style={styles.taskText}>{task}</span>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.titleContainer}>
        <h2 style={styles.titleText}>{title}</h2>
      </div>
      {tasks.map((task, index) => (
        <div key={index}>{renderItem(task)}</div>
      ))}
    </div>
  );
};

const styles = {
  container: {
    marginLeft: 18,
    marginRight: 18,
  },
  titleContainer: {
    marginTop: 20,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
  },
  taskContainer: {
    display: "flex",
    justifyContent: "center",
  },
  checkbox: {
    marginRight: 10,
  },
  taskText: {
    fontSize: 18,
  },
};

export default TaskList;
