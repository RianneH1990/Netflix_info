import React,{ useEffect, useState } from 'react';
import axios from "axios";
import styles from './Result.module.css';
import { useParams } from "react-router-dom";

function Result() {
    const { title } = useParams();
    const [movies, setMovies] = useState(null);


    useEffect(() => {
        async function fetchInfo() {
            const response = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                params: {
                    query: {title},
                },
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log(response.data.results);
            setMovies(response.data.results);


        }
        fetchInfo();
    }, []);
    console.log("dit is movie", movies)




    return (
        <div className={styles["netflixContainer"]}>
        <div className={styles["resultCard"]}>
                { movies && (movies.filter(movies => movies.title === title).map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <p className={styles['type']}>Type: {movie.vtype}</p>
                        <img src={movie.poster} alt="no poster available"/>
                        <p>IMDB rating: {movie.imdbrating}</p>
                        <br />
                        <h3>Synopsis: {movie.synopsis}</h3>
                        <p>Available in: {movie.clist}</p>
                    </div>)))}
                </div>
        </div>
    )
}

export default Result