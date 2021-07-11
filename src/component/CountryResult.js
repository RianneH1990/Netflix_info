import React,{ useEffect, useState } from 'react';
import axios from "axios";
import styles from './Result.module.css';
import { useParams } from "react-router-dom";


function CountryResult() {
    const [countries, setCountries] = useState(null);
    const [movies, setMovies] = useState(null);
    const { id } = useParams();

    console.log("id", id)
    useEffect(() => {
        async function fetchInfo() {
          const response = await axios.get(`https://unogsng.p.rapidapi.com/countries`, {
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                },
            });
            const result = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                params: {
                    "countrylist": { id }
                },
                    headers: {
                        'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                        'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                    }
                });
            console.log(id)
            console.log(response.data.results);
            setCountries(response.data.results);
            console.log("result", result.data.results);
            setMovies(result.data.results);
                 }
        fetchInfo();
    }, []);
    console.log("dit is country", countries)

    return (
        <>
            <div>
                { countries && countries.filter(countries => countries.id === id).map((movie, index) => (
                    <div key={index}>
                        <h1>{movie.title}</h1>
                        <img src={movie.poster} alt={movie.title}/>
                        <p>{movie.imdbrating}</p>
                        <p>{movie.vtype}</p>
                    </div>))}
            </div>
        </>
    )

}

export default CountryResult;