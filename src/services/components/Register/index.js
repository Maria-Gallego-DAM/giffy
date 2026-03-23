import React, {useState} from "react";
import register from "../../register";
import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateFields = values => {
    const errors = {}
    if (!values.username) {
        errors.username = 'Username is required';
    }
    if (!values.password) {
        errors.password = 'Password is required';
    } else if (values.password.length < 3) {
        errors.password = 'Password must be at least 3 characters';
    }

    return errors;
}

const handleSubmit = (values, { setFieldError }) => {
    return register(values).catch(() => {
        setFieldError('username', 'This username is not valid');
    });
}

const initialValues = {
    username: '',
    password: ''
}
export default function Register() {
    const [registered, setRegistered] = useState(false);
    if(registered) {
        return <h4>Congratulations! You have registered successfully.</h4>
    }
    return <>
        <h2>Formulario de Registro</h2>
        <Formik
            initialValues={initialValues}
            validate={validateFields}
            onSubmit={(values, {setFieldError}) =>{
                return register(values)
                    .then(() => setRegistered(true))
                    .catch(() => setFieldError('username', 'This username is not valid'));
            }}>

            {
                ({ errors, isSubmitting }) =>
                    <Form className="form">

                        <Field name="username" placeholder="Put here the username" />
                        <ErrorMessage className="form-error" name="username" component='small' />

                        <Field name="password" type="password" placeholder="Put here the password" />
                        <ErrorMessage className="form-error" name="password" component='small' />

                        <button className="btn" disabled={isSubmitting}>Registrarse</button>
                    </Form>
            }
        </Formik>
    </>

}