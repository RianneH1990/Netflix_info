import React, { useRef, useState } from 'react';
import styles from './Login.module.css';
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Validation from "../../component/Validation";

function Login() {
    const { login, setAuthenticated } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [error, setError] = useState('');
    const [valErrors, setValErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [values, setValues] = useState({
        email:"",
        password:""
    });

    const handleChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value,
        });
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setValErrors(Validation(values));
        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            setAuthenticated(true)
        } catch {
            setError('Failed to login')
        }
        setLoading(false)
    }

    return (
        <div>
            <fieldset className={styles["registerContainer"]}>
                <h1 className={styles["pageHeader"]}>Login</h1>
                {error && <p>{error}</p>}
                <form onSubmit={handleSubmit} className={styles["registerForm"]}>
                    <label classname={styles["formLabels"]} htmlFor="email">Email:</label>
                    <input
                        type="email"
                        ref={emailRef}
                        className={styles["formInput"]}
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={values.email}
                        onChange={handleChange}
                    />
                    {valErrors.email && <p className={styles["errorText"]}>{valErrors.email}</p>}
                    <label classname={styles["formLabels"]} htmlFor="password">Password:</label>
                    <input
                        type="password"
                        ref={passwordRef}
                        className={styles["formInput"]}
                        id="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                    />
                    {valErrors.password && <p className={styles["errorText"]}>{valErrors.password}</p>}
                    <button
                        disabled={loading}
                        type="submit"
                        className={styles["loginButton"]}
                    >
                        Login
                    </button>
                </form>
                <Link className={styles["redirect"]} to="/SignUp">
                    If you don't have an account, sign up here.
                </Link>
            </fieldset>
        </div>
    )
}

export default Login