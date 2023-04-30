import React from "react";
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

const LoginFormik = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  return (
    <div>
      <Formik
        // *** Initial values that the form will take ***
        initialValues={ initialCredentials }
        // *** Yup Validation Schema***
        validationSchema={ loginSchema }
        // *** OnSubmit Event***
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 100));
          alert(JSON.stringify(values, null, 2));
          // We save the data in the localstorage
          await localStorage.setItem('credentials',values);
          navigate('/profile');
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
    </div>
  );
};

export default LoginFormik;
