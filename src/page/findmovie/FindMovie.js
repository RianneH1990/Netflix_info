import React, { useEffect, useState } from 'react';
import styles from './FindMovie.module.css';
import axios from "axios";
import {Link} from "react-router-dom";
import Result from "../../component/Result";
import Searchbar from "../../component/SearchBar";


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
            const result = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                params: {
                },
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log(response.data.results);
            setCountries(response.data.results);
            console.log(response.data.results);
            setMovies(response.data.results);
        }
        fetchMovie();
        console.log("country", countries)
    }, []);

    return (
        <div className={styles["findPage"]}>
            <h3 className={styles["pageInfo"]}>On this page you can look for a movie or Tv-show. Typ in the title in the searchbar below. Or if you want to see all the content that is available in a country just click on the country on the bottom of this page.</h3>
            <label>Find a Movie or Tv-show</label>
            <Searchbar />
            <label className={styles["countryLabel"]} htmlFor="country">Choose a country to check the available content</label>
            <div className={styles["form"]}>
                    {countries && countries.map((country) => {
                        return <div><Link to={`/CountryResult/${country.id}`}><p className={styles["countryNames"]}>{country.country}</p></Link></div>
                    })}
                            </div>
        </div>
    )
}

export default FindMovie