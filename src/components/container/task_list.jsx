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
    return () => {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      console.log("TaskListComponent is going to unmount...");
    };
  }, [tasks]);

  function completeTask(task){

    //obtenemos el indice
    const index = tasks.indexOf(task);
   
    // ?Buena practicas 
    //Copiar todas las tareas
    const tempTask = [...tasks];
    //Modificar la tarea ahora
    tempTask[index].isCompleted = !tempTask[index].isCompleted;
    //volvemos a cargar los datos
    setTasks(tempTask);
  }

  function deleteTask(task){
    //obtenemos el indice
    const index = tasks.indexOf(task);
    // ?Buena practicas 
    //Copiar todas las tareas
    const tempTask = [...tasks];
    //borramos el elemento
    // splice se situa en el indice y borra los elemento que le pasemos como segundo parametro
    tempTask.splice(index,1);
    setTasks(tempTask);
  }

  function addTask(task){
   //Copiar todas las tareas
    const tempTask = [...tasks];
    //agregamos el elemento
    tempTask.push(task);
    //actualizamos
    setTasks(tempTask);
  }

  function taskTable(){
    return(
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
                    return(<TaskComponent key={index} task={actTask} complete={completeTask} remove={deleteTask}></TaskComponent>)
                })}
            </tbody>
          </table>
    )
  }

  let table;

  if(tasks.length >0){
    table = taskTable()
  }else{
    table = (<div><h4>There are no tasks to show</h4>
    <h5>Please, create one</h5>
    </div>)
  }

  const loadigSpinner = (
  <div className="spinner-border text-primary text-center mt3" role="status">
  <span className="visually-hidden">Loading...</span>
</div>
)

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

        {loading ? loadigSpinner : table}
        
          
        </div>
        <TaskForm add={addTask} lenght={tasks.length}></TaskForm>
      </div>
    </div>
  );
};

export default TaskListComponent;
