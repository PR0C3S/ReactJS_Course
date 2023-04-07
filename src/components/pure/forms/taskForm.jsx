import React, { useRef } from "react";
import { LEVELS } from "../../../models/levels.enum";
import { Task } from "../../../models/task.class";
import PropTypes from "prop-types";

const TaskForm = ({add}) => {
  const titleRef = useRef("");
  const descriptionRef = useRef("");
  const levelRef = useRef(LEVELS.NORMAL);

  function addTask(e) {
    e.preventDefault();
    const newTask = new Task(
      titleRef.current.value,
      descriptionRef.current.value,
      false,
      levelRef.current.value
    );
    add(newTask);
  }

  return (
    <form onSubmit={addTask}>
      <div>
        <h1>Create new task</h1>
      </div>
      <div className="mb-3">
        <label for="title" className="form-label">Title</label>
        <input
          ref={titleRef}
          type="text"
          id="title"
          className="form-control"
          required
          autoFocus
        />
      </div>
      <div className="mb-3">
        <label for="description" className="form-label">Description</label>
        <input
          ref={descriptionRef}
          type="text"
          id="description"
          className="form-control"
          required
          autoFocus
        />
      </div>

      <div className="mb-3">
        <label for="description" className="form-label">Priority</label>
        <select className="form-select" ref={levelRef}>
          <option selected value={LEVELS.NORMAL}>Normal</option>
          <option value={LEVELS.BLOCKING}>Blocking</option>
          <option value={LEVELS.URGENT}>Urgent</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary">
        Add task
      </button>
    </form>
  );
};

TaskForm.prototype = {
  add: PropTypes.func.isRequired,
};

export default TaskForm;
