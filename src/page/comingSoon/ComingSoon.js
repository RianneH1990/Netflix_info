import styles from '../goneSoon/GoneComingSoon.module.css';
import axios from "axios";
import React, { useState, useEffect } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {useAuth} from "../../contexts/AuthContext";




function ComingSoon(props) {
    const [movies, setMovies] = useState(null);
    const { authenticated } = useAuth();

            useEffect(() => {
            async function ComingSoon() {
                const response = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                    params: {
                        newdate: '2021-07-12',
                        limit: '10000',
                        countrylist: '67'
                    },
                    headers: {
                        'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
                console.log(response.data.results);
                setMovies(response.data.results);
            }
                ComingSoon();
            console.log("movie", movies)
        }, [setMovies]);
            console.log("dit is movie", movies)

    if (!authenticated) {
        return <Redirect to='/Login' />
    }


            return (
            <div>
                <div className={styles["header"]}>
                    <h1 className={styles['page-title']}>Titles that will be coming soon</h1>
                    <h3 className={styles['page-sub-title']}>from the Netherlands</h3>
                    <p>Click on the title for more information</p>
                    {movies && movies.map((movie) => {
                        return <div className={styles["card"]}><Link to={`/Result/${movie.title}`}><h2 className={styles['title']}>{movie.title}</h2></Link><p className={styles["date"]}>Added on the: {movie.titledate}</p></div>
                    })}
                </div>
            </div>

    )
}

export default ComingSoon