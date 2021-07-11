import React from 'react';
import styles from './Login.module.css';
import {Link} from "react-router-dom";


function Login({login, setLogin}) {

    return (
        <>
            <div className={styles["header"]}>
                <fieldset className={styles["containerForm"]}>
                    <h1>Login</h1>
                    <form>
                        <div className={styles["form"]}>
                            <label
                                htmlFor="userName"
                                className={styles["formLabel"]}
                            >Email:</label>
                            <input
                                type="email"
                                className={styles["formInput"]}
                                id="email"
                                name="email"
                                placeholder="Email"
                            />
                            <label
                                htmlFor="password"
                                className={styles["formLabel"]}
                            >Password:</label>
                            <input
                                type="password"
                                id="password"
                                className={styles["formInput"]}
                                name="password"
                                placeholder="Password123"
                            />
                            <button
                                onClick={() => setLogin(true)}
                                className={styles["loginButton"]}
                                onclick="return false"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                    <Link className={styles["redirect"]} to="/Register">
                        No account? Click here to register.
                    </Link>
                </fieldset>
            </div>
        </>
    )
}

export default Login