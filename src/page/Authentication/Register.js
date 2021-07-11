import React from 'react';
import styles from './Register.module.css';
import {Link} from "react-router-dom";


function Register({ login, setLogin }) {

    return (
        <>
            <div className={styles["header"]}>
                <fieldset className={styles["registerContainer"]}>
                    <h1>Register</h1>
                    <form className={styles["registerForm"]}>
                        <label htmlFor="Email" className={styles["formLabel"]}>
                            Email:
                        </label>
                        <input
                            type="email"
                            className={styles["formInput"]}
                            id="Email"
                            name="Email"
                            placeholder="Email"
                        />
                        <label htmlFor="password" className={styles["formLabel"]}>
                            Password:
                        </label>
                        <input
                            type="password"
                            className={styles["formInput"]}
                            id="Password"
                            name="Password"
                            placeholder="Password"
                        />
                        <label htmlFor="password2" className={styles["formLabel"]}>
                            Password:
                        </label>
                        <input
                            type="password"
                            className={styles["formInput"]}
                            id="Password2"
                            name="Password2"
                            placeholder="Repeat password"
                        />
                        <label htmlFor="country" className={styles["formLabel"]}>
                            Country:
                        </label>
                        <input
                            type="text"
                            className={styles["formInput"]}
                            id="Country"
                            name="Country"
                            placeholder="Your country"
                        />
                        <input
                            type="submit"
                            value="Create account"
                            className={styles["loginButton"]}
                            onclick="return false"
                        />
                    </form>
                    <Link className={styles["redirect"]} to="/Login">
                        Already have an account, login here.
                    </Link>
                </fieldset>
            </div>
        </>
    )
}

export default Register