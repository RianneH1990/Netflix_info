import React, { useEffect, useState } from 'react';
import styles from './FindMovie.module.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Result from "../../component/Result";


function FindMovie(props) {
    const [movies, setMovies] = useState(null);
    const [countries, setCountries] = useState('');


    useEffect(() => {
        async function fetchMovie() {
            const response = await axios.get(`https://unogsng.p.rapidapi.com/countries`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log(response.data.results);
            setCountries(response.data.results);
        }
        fetchMovie();
        console.log("country", countries)
    }, []);
    console.log("dit is country", countries[0])

    return (
        <div className={styles["findPage"]}>
            <div className={styles["header"]}>
                    <label className={styles["searchLabel"]} htmlFor="search">Find a movie or TV-show:</label>
                    <input className={styles["searchBar"]} id="search" name="search" type="text"/>
                    <button className={styles["searchButton"]}>Search</button>
                </div>
            <div className={styles["searchForm"]}>
                <label className={styles["countryLabel"]} htmlFor="country">Choose a country to check the available content</label>
                    {countries && countries.map((country) => {
                        return <div><Link to={`/CountryResult/${country.id}`}>{country.country}</Link></div>
                    })}
                            </div>
            <Result
            countries={countries}
            setCountries={setCountries}
            />
        </div>
    )
}

export default FindMovie