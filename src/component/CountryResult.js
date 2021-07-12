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

    console.log("id", id)
    console.log("offset", offset)


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
            console.log(response.data.results);
            console.log("result", result.data.results);
            setMovies(result.data.results);
            setCountries(response.data.results);
                 }
        fetchInfo();
    },[refreshKey]);
    console.log("movie na fetch", movies);


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
                        <h1>{movie.title}</h1>
                        <img src={movie.poster} alt="No poster available"/>
                        <p>IMDB rating: {movie.imdbrating}</p>
                        <p>Type: {movie.vtype}</p>
                        <h3>Synopsis: {movie.synopsis}</h3>
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