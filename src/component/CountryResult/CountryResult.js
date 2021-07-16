import React,{ useEffect, useState } from 'react';
import axios from "axios";
import styles from './CountryResult.module.css';
import { useParams } from "react-router-dom";


function CountryResult() {
    const [movies, setMovies] = useState(null);
    const [countries, setCountries] = useState(null);
    const [offset, setOffset] = useState(0);
    const [refreshKey, setRefreshKey] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        async function fetchInfo() {
            const result = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                params: {
                    orderby: 'rating',
                    countrylist: id,
                    limit: '10',
                    offset: offset
                },
                    headers: {
                        'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            const response = await axios.get(`https://unogsng.p.rapidapi.com/countries`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            setMovies(result.data.results);
            setCountries(response.data.results);
                 }
        fetchInfo();
    },[refreshKey]);


    function nextPage() {
        return setRefreshKey(oldkey => oldkey +1), setOffset(offset +10);
    }

    function previousPage() {
        return setRefreshKey(oldkey => oldkey +1), setOffset(offset -10);
    }

    return (
        <div>
            <h1 className={styles["pageTitle"]}>Available content</h1>
            <div className={styles["resultContainer"]}>
                { movies && movies.map((movie, index) => (
                    <div className={styles["movieContainer"]} key={index}>
                        <h1 className={styles["title"]}>{movie.title}</h1>
                        <p className={styles["type"]}>Type: {movie.vtype}</p>
                        <img className={styles["image"]} src={movie.poster} alt="No poster available"/>
                        <p className={styles["rating"]}>IMDB rating: {movie.imdbrating}</p>
                        <h3 className={styles["synopsis"]}>Synopsis: {movie.synopsis}</h3>
                        <p className={styles["available"]}>Available in: {movie.clist}</p>
                    </div>))}
            </div>
            <div className={styles["buttons"]}>
            <button
                type="button"
                onClick={previousPage}
                disabled={offset === 0}
            >
                Vorige
            </button>
            <button
                type="button"
                onClick={nextPage}
            >
                Volgende
            </button>
        </div>
        </div>
    )

}

export default CountryResult;