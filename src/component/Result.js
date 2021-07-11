import React,{ useEffect, useState } from 'react';
import axios from "axios";
import styles from './Result.module.css';
import { useParams } from "react-router-dom";

function Result() {
    const { title } = useParams();
    const { id } = useParams();
    const [movies, setMovies] = useState(null);
    const [countries, setCountries] = useState(null);

    useEffect(() => {
        async function fetchInfo() {
            const response = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            const result = await axios.get(`https://unogsng.p.rapidapi.com/countries`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log(response.data.results);
            setMovies(response.data.results);
            console.log(result.data.results);
            setCountries(result.data.results);

        }
        fetchInfo();
    }, []);
    console.log("dit is movie", movies)
    console.log("dit is country", countries)



    return (
        <div className={styles["netflixContainer"]}>
            <h1>Result</h1>
        <div>
                { movies && movies.filter(movies => movies.title === title).map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.imdbrating}</p>
                        <p>{movie.vtype}</p>
                    </div>))}
        </div>
        </div>
    )
}

export default Result