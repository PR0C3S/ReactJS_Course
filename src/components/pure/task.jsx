import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { Task } from "../../models/task.class";
import '../../styles/task.scss'
const TaskComponent = ({ task }) => {

  useEffect(() => {
    console.log('Create Task');
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);
  return (
    <div>
      <h2 className="task-name"> Name: {task.name} </h2>
      <h3> Description: {task.description} </h3>
      <h3> Level: {task.level} </h3>
      <h4>This task is: {task.completed ? "COMPLETED" : "PENDING"}</h4>
    </div>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task),
};

export default TaskComponent;
