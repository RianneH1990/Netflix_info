import React from 'react';
import styles from './FindMovie.module.css';


function FindMovie(props) {

    return (
        <div className={styles["findPage"]}>
            <div className={styles["header"]}>
                    <label htmlFor="search">Find a movie or TV-serie by title:</label>
                    <input id="search" name="search" type="text"/>
                    <button className={styles["searchButton"]}>Search</button>
                </div>

           
        </div>
    )
}

export default FindMovie