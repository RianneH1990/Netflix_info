import React, { useEffect, useState } from 'react';
import styles from './FindMovie.module.css';
import axios from "axios";
import {Link, Redirect } from "react-router-dom";
import Searchbar from "../../component/SearchBar/SearchBar";
import { useAuth } from "../../contexts/AuthContext";


function FindMovie() {
    const [countries, setCountries] = useState('');
    const { authenticated } = useAuth();

    useEffect(() => {
        async function fetchMovie() {
            const response = await axios.get(`https://unogsng.p.rapidapi.com/countries`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            setCountries(response.data.results);
        }
        fetchMovie();
    }, []);

    if (!authenticated) {
        return <Redirect to='/Login' />
    }

    return (
        <div className={styles["findPage"]}>
            <h3 className={styles["pageInfo"]}>On this page you can look for a movie or Tv-show. Typ in the title in the searchbar below. Or if you want to see all the content that is available in a country just click on the country on the bottom of this page.</h3>
            <label className={styles["findMovieShow"]}>Find a Movie or Tv-show</label>
            <Searchbar />
            <label className={styles["countryLabel"]} htmlFor="country">Choose a country to check the available content</label>
            <div className={styles["form"]}>
                    {countries && countries.map((country) => {
                        return <div className={styles["countryList"]}><Link to={`/CountryResult/${country.id}`}><p className={styles["countryNames"]}>{country.country}</p></Link></div>
                    })}
                            </div>
        </div>
    )
}

export default FindMovie