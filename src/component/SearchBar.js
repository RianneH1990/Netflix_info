import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import {  IoSearch } from "react-icons/io5";




function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');


    const handleInput = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
    }


    console.log(searchTerm);

    return (
        <div>
            <div className={styles["searchBar"]}>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Find a movie or Tv-show"
                    className={styles["searchBarInput"]}
                    onChange={handleInput}
                    value={searchTerm}
                />
                <Link to={`/Result/${searchTerm}`}>
                <button className={styles["searchButton"]}
                disabled={! searchTerm}
                >
                    🔎
                </button>
                </Link>

            </div>
        </div>
    );
}

export default Searchbar;