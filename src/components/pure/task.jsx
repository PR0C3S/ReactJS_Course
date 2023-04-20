import React, { useEffect } from "react";
import PropTypes from "prop-types";

//Models
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";

//Import Style sheet
import "../../styles/task.scss";

const TaskComponent = ({ task, complete, remove }) => {
  useEffect(() => {
    console.log("Create Task");
    return () => {
      console.log(`Task: ${task.name} is going to unmount`);
    };
  }, [task]);

  /**
   * Function that return a badge depending of the level of the task
   */
  function taskLevelBadge() {
    switch (task.level) {
      case LEVELS.NORMAL:
        return (
          <h6 className="mb-0">
            <span className="badge text-bg-primary">{task.level}</span>
          </h6>
        );

      case LEVELS.URGENT:
        return (
          <h6 className="mb-0">
            <span className="badge text-bg-danger">{task.level}</span>
          </h6>
        );

      case LEVELS.BLOCKING:
        return (
          <h6 className="mb-0">
            <span className="badge text-bg-secondary">{task.level}</span>
          </h6>
        );

      default:
        break;
    }
  }

  function taskIconIsCompleted() {
    if (task.isCompleted) {
      return <i onClick={ ()=> complete(task)} className="bi-toggle-on task-action" style={{ color: "green" }}></i>;
    } else {
      return <i onClick={ ()=> complete(task)} className="bi-toggle-off task-action" style={{ color: "gray" }}></i>;
    }
  }

    const taskCompleted = {
      color: 'gray',
      fontWeight: 'bold',
      textDecoration: 'line-through'
    }

    const taskPending = {
      color: 'tomato',
      fontWeight: 'bold',
    }
 

  return (
    <tr className="fw-normal" style={task.isCompleted ? taskCompleted : taskPending}>
      <th>
        <span className="ms-2">{task.name}</span>
      </th>
      <td className="align-middle">
        <span>{task.description}</span>
      </td>
      <td className="align-middle">
        {/* TODO: sustituir por un badge */}
        {taskLevelBadge()}
      </td>
      <td className="align-middle">
        {/* TODO: sustituir por un badge */}
        {taskIconIsCompleted()}

        <i onClick={() => remove(task)} className="bi-trash task-action" style={{ color: "tomato" }}></i>
      </td>
    </tr>
  );
};

TaskComponent.propTypes = {
  task: PropTypes.instanceOf(Task).isRequired,
  complete: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
};

export default TaskComponent;
