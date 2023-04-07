import React, { useState, useEffect } from "react";
import { Task } from "../../models/task.class";
import { LEVELS } from "../../models/levels.enum";
import TaskComponent from "../pure/task";
import "../../styles/task.scss";
import TaskForm from "../pure/forms/taskForm";

const TaskListComponent = () => {
  const defaulTask1 = new Task(
    "Homework",
    "Do exercirce 1 page 20",
    false,
    LEVELS.NORMAL
  );

  const defaulTask2 = new Task(
    "Work",
    "Go to work",
    true,
    LEVELS.URGENT
  );

  const defaulTask3 = new Task(
    "Take a shower",
    "Take a shower to go out",
    true,
    LEVELS.BLOCKING
  );

  // Estado del componente
  const [tasks, setTasks] = useState([defaulTask1,defaulTask2, defaulTask3]);
  const [loading, setLoading] = useState(true);

  // Control del ciclo de vida del componente
  useEffect(() => {
    console.log("Task State has been modified");
    setLoading(false);
    return () => {
      setLoading(true);
      console.log("TaskListComponent is going to unmount...");
    };
  }, [tasks]);

  const changeCompleted = (id) => {
    console.log("TODO: Cambiar estado de una tarea");
  };
  return (
    <div>
      <div className="col-12">
        <div className="card text-bg-primary">
          <div className="card-header p-3">
            <h5>Your Tasks:</h5>
          </div>
        </div>
        <div
          className="card-body"
          data-mdb-perfect-scrollbar="true"
          style={{ position: "relative", height: "400px" }}
        >
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Title</th>
                <th scope="col">Description</th>
                <th scope="col">Priority</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
                    
                {/* TODO: Iterar sobre una lista de tareas */}
                {tasks.map( (actTask,index) =>{
                    return(<TaskComponent key={index} task={actTask}></TaskComponent>)
                })}
            </tbody>
          </table>
        </div>
        <TaskForm></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
