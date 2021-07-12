import React, {useEffect} from 'react';
import styles from './GoneSoon.module.css';
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';

function GoneSoon(props) {
    const [movies, setMovies] = useState(null);

    useEffect(() => {
        async function goneSoon() {
            const response = await axios.get(`https://unogsng.p.rapidapi.com/expiring`, {
                params: {countrylist: '67'},
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            console.log(response.data.results);
            setMovies(response.data.results);
        }
        goneSoon();
        console.log("movie", movies)
    }, [setMovies]);
    console.log("dit is movie", movies)


    return (
        <div>
            <div className={styles["header"]}>
                <h1 className={styles['page-title']}>Titles that will be gone soon</h1>
                <h3 className={styles['page-sub-title']}>from the Netherlands</h3>
                 {movies && movies.map((movie) => {
                    return <div><Link to={`/Result/${movie.title}`}><h2 className={styles['title']}>{movie.title}</h2></Link><p className={styles["date"]}>Expire date: {movie.expiredate}</p></div>
            })}
            </div>
        </div>
    )
}

export default GoneSoon