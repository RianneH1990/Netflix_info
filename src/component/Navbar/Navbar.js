import React from 'react';
import styles from "../../App.module.css";
import {Link} from "react-router-dom";
import logo from "../../image/logo-lighter.png";
import {useAuth} from "../../contexts/AuthContext";

export default function Navbar() {
    const {authenticated, setAuthenticated} = useAuth();



    return(
        <nav>
            <ul className={styles["navLinks"]}>
                <li className={styles["Logo"]}><Link exact to='/'><img src={logo} alt="logo"/></Link></li>
                <li><Link exact to="/">Home</Link></li>
                { authenticated &&
                <li><Link to="/FindMovie">Find movie/serie</Link></li>}
                { authenticated &&
                <li><Link to="/ComingSoon">Coming soon</Link></li>}
                { authenticated &&
                <li><Link to="/GoneSoon">Gone soon</Link></li>}
                { !authenticated &&
                <li><Link to="/Login">Login</Link></li>}
                { !authenticated &&
                <li><Link to="/SignUp">SignUp</Link></li>}
                { authenticated &&
                <button variant="link" onClick={() => setAuthenticated(false)} className={styles["logout"]}>Logout</button>}
            </ul>

        </nav>
    )
}