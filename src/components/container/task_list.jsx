import React from 'react';
import { Task } from '../../models/task.class';
import { LEVELS } from '../../models/levels.enum';
import TaskComponent from '../pure/task';


const TaskListComponent = () => {

    const defaulTask = new Task('Homework', 'Do exercirce 1 page 20', false, LEVELS.NORMAL);

    return (
        <div>
            <h1>
                Your Tasks:
            </h1>
            <TaskComponent task={defaulTask}></TaskComponent>        
        </div>
    );
};




export default TaskListComponent;
