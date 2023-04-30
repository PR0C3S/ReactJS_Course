import React from 'react';
import TaskListComponent from '../../components/container/task_list';
import { Outlet } from 'react-router-dom';

const TasksPage = () => {
    return (
        <div>
            
            <TaskListComponent></TaskListComponent>
        </div>
    );
}

export default TasksPage;
