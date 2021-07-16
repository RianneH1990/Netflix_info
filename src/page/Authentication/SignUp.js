import React, { useRef, useState } from 'react';
import styles from './SignUp.module.css';
import {Link, useHistory} from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import Validation from "../../component/Validation";

function SignUp() {
    const { signup, setAuthenticated } = useAuth();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const countryRef = useRef();
    const [error, setError] = useState('');
    const [valErrors, setValErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const [values, setValues] = useState({
        email:"",
        password:"",
        passwordConfirm:"",
        country:""
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
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        }
        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/')
            setAuthenticated(true)
        } catch {
            setError('Sign up failed')
        }
        setLoading(false)
    }

    return (
            <div className={styles["header"]}>
                <fieldset className={styles["registerContainer"]}>
                    <h1 className={styles["pageHeader"]}>Sign Up</h1>
                    <form onSubmit={handleSubmit} className={styles["registerForm"]}>
                        <label htmlFor="email">Email:</label>
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
                        <label htmlFor="password">Password:</label>
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
                        <label htmlFor="passwordConfirm">Confirm password:</label>
                        <input
                            type="password"
                            ref={passwordConfirmRef}
                            className={styles["formInput"]}
                            id="passwordConfirm"
                            name="passwordConfirm"
                            placeholder="Confirm password"
                            value={values.passwordConfirm}
                            onChange={handleChange}
                        />
                        {valErrors.passwordConfirm && <p className={styles["errorText"]}>{valErrors.passwordConfirm}</p>}
                        <label htmlFor="country">country:</label>
                        <input
                            type="text"
                            ref={countryRef}
                            className={styles["formInput"]}
                            id="country"
                            name="country"
                            placeholder="Your country"
                            value={values.country}
                            onChange={handleChange}
                           />
                        {valErrors.country && <p className={styles["errorText"]}>{valErrors.country}</p>}
                        <button
                            disabled={loading}
                            type="submit"
                            className={styles["loginButton"]}
                        >
                            Create account
                        </button>
                    </form>
                    <Link className={styles["redirect"]} to="/Login">
                        Already have an account, login here.
                    </Link>
                </fieldset>
            </div>
    )
}

export default SignUp