import React from 'react';
import { login, getAllPagedUsers, getAllUsers, getUserById, createUser, updateUserById, deleteUserById} from '../../services/axiosCrudService';
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const loginSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
  
    password: Yup.string()
    .min(6,"Password need minimun 6 characters")
    .required("Password is required"),
  });
  
  
   
  
const AxiosCrudExample = () => {

    const initialCredentials = {
        email: "",
        password: "",
    };
  
    const authUser = (values) =>{
        login(values.email,values.password)
            .then((response)=>{
                if(response.data.token){
                    alert(JSON.stringify(response.data.token));
                    sessionStorage.setItem('token',response.data.token);
                }else{
                    sessionStorage.removeItem('token');
                    throw new Error('Login failure');
                }
            })
            .catch((error)=>{
                sessionStorage.removeItem('token');
                alert(`Something went wrong: ${error}`);
            })
            .finally(()=> console.log('Login done'))
    }

    //CRUD Examples

    const obtainAllUsers =() =>{
        getAllUsers()
            .then( (response) =>{
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error('No users found');
                }
            })
            .catch((error)=>{
                sessionStorage.removeItem('token');
                alert(`Something went wrong: ${error}`);
            })
    }

    const obtainAlllPagedUsers =(page) =>{
        getAllPagedUsers(page)
            .then( (response) =>{
                if(response.data.data && response.status === 200){
                    alert(JSON.stringify(response.data.data));
                }else{
                    throw new Error(`No users found in page ${page}`);
                }
            })
            .catch((error)=>{
                sessionStorage.removeItem('token');
                alert(`Something went wrong: ${error}`);
            })
    }

    const obtainUserByID = (id) =>{
        getUserById(id)
        .then( (response) =>{
            if(response.data.data && response.status === 200){
                alert(JSON.stringify(response.data.data));
            }else{
                throw new Error('User not found');
            }
        })
        .catch((error)=>{
            sessionStorage.removeItem('token');
            alert(`Something went wrong: ${error}`);
        })
    }

    const createNewUser = (name, job) =>{
        createUser(name,job)
        .then( (response) =>{
            if(response.data && response.status === 201){
                alert(JSON.stringify(response.data));
            }else{
                throw new Error('User not created');
            }
        })
        .catch((error)=>{
            sessionStorage.removeItem('token');
            alert(`Something went wrong: ${error}`);
        })
    }

    const updateUser = (id, name, job) =>{
        updateUserById(id, name, job)
        .then( (response) =>{
            if(response.data && response.status === 200){
                alert(JSON.stringify(response.data));
            }else{
                throw new Error('User not found');
            }
        })
        .catch((error)=>{
            sessionStorage.removeItem('token');
            alert(`Something went wrong: ${error}`);
        })
    }

    const deleteUser = (id) =>{
        deleteUserById(id)
        .then( (response) =>{
            if(response.status === 204){
                alert(`User with id: ${id} successfully deleted`);
            }else{
                throw new Error('User not found');
            }
        })
        .catch((error)=>{
            sessionStorage.removeItem('token');
            alert(`Something went wrong: ${error}`);
        })
    }

    return (
        <div>
        <h1>Login Formik</h1>
        <Formik
          // *** Initial values that the form will take ***
          initialValues={ initialCredentials }
          // *** Yup Validation Schema***
          validationSchema={ loginSchema }
          // *** OnSubmit Event***
          onSubmit={async (values) => {
            authUser(values);
          }}
        >
          {/* We obtain props from Formik */}
  
          { ({  values,
                  touched,
                  errors,
                  isSubmitting,
                  handleChange,
                  handleBlur }) => (<Form>
                          <label htmlFor="email">Email</label>
                          <Field id="email" type="text" name="email" placeholder="example@email.com"/>
                          
                          {errors.email && touched.email && (
                              /*<div className="error">
                                  <p>{errors.email}</p>
                              </div>*/
                          <ErrorMessage component="div" name="email"/>
                          )}
  
                          <label htmlFor="password">Password</label>
                          <Field id="password" type="password" name="password"  placeholder="password"/>
                          {errors.password && touched.password && (
                              
                              /*<div className="error">
                                  <p>{errors.password}</p>
                              </div>*/
  
                              <ErrorMessage component="div" name="password"/>
                          )}
  
                          <button type="submit">Login</button>
                          { isSubmitting ? <p>Login your credentials...</p> : null}
                      </Form>)}
          
        </Formik>
        {/*Example button to test API response */}
        <div>
            <button onClick={obtainAllUsers}>Get all users</button>
            <button onClick={()=> obtainAlllPagedUsers(1)}>Get all users (Page1)</button>
            <button onClick={()=> obtainUserByID(1)}>Get user by id (user 1)</button>
            <button onClick={()=> createNewUser('morpheus','leader')}>Create a new user</button>
            <button onClick={()=> updateUser(1,'john','developer')}>Update user (1)</button>
            <button onClick={()=> deleteUser(1)}>Delete user (1)</button>
            
        </div>
      </div>
    );
}

export default AxiosCrudExample;
