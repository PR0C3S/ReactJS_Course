import React from 'react';
import * as Yup from 'yup';
import { LEVELS } from '../../../models/levels.enum';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import PropTypes from "prop-types";
import { Task } from '../../../models/task.class';



const TaskFormik = ({add,lenght}) => {
    const taskSchema = Yup.object().shape({
        
        title: Yup.string()
        .min(5,'Title is too short')
        .max(20, 'Title is too long')
        .required('Title is required'),
        
        description: Yup.string()
        .min(5,'Description is too short')
        .max(40, 'Description is too long')
        .required('Description is required'),
        
         priority: Yup.string()
         .oneOf([LEVELS.NORMAL, LEVELS.BLOCKING, LEVELS.URGENT],'You must select a priority: NORMAL/BLOCKING/URGENT')
         .required('Priority is required')
    });
    
    const initialData = {
        title: '',
        description: '',
        priority: LEVELS.NORMAL
    }

    function addTask(values) {
        const newTask = new Task(
            values.title,
            values.description,
            false,
            values.priority
          );
          add(newTask)
        add(newTask);
      }
    
    return (
        <div>
        <h1>Create new task</h1>
        <Formik 
        initialValues={initialData} 
        validationSchema={taskSchema}
        onSubmit={(values) =>{
            addTask(values);
        }}>

            {({ values, touched, errors}) => (
                <Form>
                    <div className="mb-3">
                    <label  className="form-label">Title</label>
                    <Field type='text' id='title' name='title' placeholder='Insert your title' />
                    {/* Name Errors */}
                    {
                        errors.title && touched.title && 
                        (
                        <ErrorMessage name='title' component='div'></ErrorMessage>
                        )
                    }
                    </div>

                    <div className="mb-3">
                    <label  className="form-label">Description</label>
                    <Field type='text' id='description' name='description' placeholder='Insert your Description' />
                    {/* Description Errors */}
                    {
                        errors.description && touched.description && 
                        (
                        <ErrorMessage name='description' component='div'></ErrorMessage>
                        )
                    }
                    </div>

                    <div className="mb-3">
                    <label  className="form-label">Priority</label>
                    <Field id='priority' name='priority' as='select'>
                        <option value={LEVELS.NORMAL} defaultValue={LEVELS.NORMAL}>Normal</option>
                        <option value={LEVELS.BLOCKING}>Blocking</option>
                        <option value={LEVELS.URGENT}>Urgent</option>
                    </Field>
                    </div>
                    <button type="submit" className="btn btn-primary">
                        {lenght > 0 ? 'Add task' : 'Create your first task'}
                    </button>
                </Form>
            )}
        </Formik>
        </div>
    );
}

TaskFormik.prototype = {
    add: PropTypes.func.isRequired,
    lenght: PropTypes.number.isRequired
  };

export default TaskFormik;
