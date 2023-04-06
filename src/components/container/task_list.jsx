import React, { useState, useEffect } from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';
import '../../styles/task.scss'

const TaskListComponent = () => {

    const defaulTask = new Task('Homework', 'Do exercirce 1 page 20', false, LEVELS.NORMAL);
    // Estado del componente
    const [tasks, setTasks] = useState([defaulTask]);
    const [loading, setLoading] = useState(true);

    // Control del ciclo de vida del componente
    useEffect(() => {
        console.log('Task State has been modified');
        setLoading(false);
        return () => {
            setLoading(true);
            console.log('TaskListComponent is going to unmount...');
        };
    }, [tasks]);

    const changeCompleted = (id) => {
        console.log('TODO: Cambiar estado de una tarea');
    }
    return (
        <div>
            <h1>Your Tasks:</h1>
            <TaskComponent task={defaulTask}></TaskComponent>        
        </div>
    );
};




export default TaskListComponent;
