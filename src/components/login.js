import React from 'react';
import { useFormik } from 'formik';

const LoginForm = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
    })

    return(
        <form autoComplete='on'>
            <label htmlFor="email">E-mail</label>
            <input 
                value={formik.values.email}
                onChange={formik.handleChange}
                id="email" type="email" placeholder='Enter Your Email'
            />

            <label htmlFor="password">Password</label>
            <input 
                value={formik.values.password}
                onChange={formik.handleChange}
                id="password" type="password" placeholder='Enter Your Email'
                onBlur={formik.handleBlur}
            />
            <button type="submit">Submit</button>
        </form>
    )
}
export default LoginForm;