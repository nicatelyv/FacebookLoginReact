import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { Helmet } from 'react-helmet'
import './style.scss'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <section className='loginpage'>
    <Helmet>
        <title>Log into Facebook</title>
    </Helmet>
        <div className='pagecontainer'>
            <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='Facebook'></img>
            <div>
              <h3>Log Into Facebook</h3>
            <Formik
       initialValues={{ password: '', email: '' }}
       validationSchema={Yup.object({
         email: Yup.string().required('The email or mobile number you entered isn’t connected to an account. Find your account and log in.'),
         password: Yup.string()
           .max(15, 'Must be 15 characters or less'),
       })}
       onSubmit={(values, { setSubmitting }) => {
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);
       }}
     >
       <Form>
         <Field name="email" type="text" placeholder='Email or phone number'/>
         <div id='errors'><ErrorMessage name='email'/></div>
         <Field name="password" type="password" placeholder='Password'/>

         <button type="submit">Log In</button>
       </Form>
     </Formik>
     <div>
      <Link>Forgot account?</Link>
      <Link to={'/signup'}>Sign up for Facebook</Link>
     </div>
            </div>
        </div>
    </section>
  )
}

export default Login