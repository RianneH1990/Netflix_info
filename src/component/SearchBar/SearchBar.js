import React from "react";
import { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { Link } from "react-router-dom";
import axios from "axios";


function Searchbar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get(`https://unogsng.p.rapidapi.com/search`, {
                params: {
                    orderby: 'rating',
                    limit: '100000'
                },
                headers: {
                    'x-rapidapi-key': '5afddf5ee1msha5adb76cf4d0fd6p193af4jsn2e25819a03b4',
                    'x-rapidapi-host': 'unogsng.p.rapidapi.com'
                }
            });
            setResults(result.data.results);
        }
        fetchData();
    }, []);

    const onSuggestHandler = (text) => {
        setText(text);
        setSearchTerm(text);
        setSuggestions([]);
    }

    const onChangeHandler = (text)=>{
        let matches = []
        if (text.length > 0) {
            matches = results.filter(result => {
                const regex = new RegExp(`${text}`, "gi");
                return result.title.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
        setSearchTerm(text)
    }

    return (
        <div className={styles["container"]}>
            <div className={styles["searchBar"]}>
                <input
                    type="text"
                    name="searchBar"
                    id="searchBar"
                    placeholder="Find a movie or Tv-show"
                    className={styles["searchBarInput"]}
                    onChange={e => onChangeHandler(e.target.value)}
                    value={text}
                />
                <div className={styles["suggestionContainer"]}>
                    {suggestions && suggestions.map((suggestion, i) =>
                        <div
                            key={i}
                            className={styles["suggestions"]}
                            onClick={() => onSuggestHandler(suggestion.title)}
                        >
                            {suggestion.title}</div>
                    )}
                </div>
            </div>
            <div className={styles["buttonContainer"]}>
            <Link to={`/Result/${searchTerm}`}>
                <button className={styles["searchButton"]}
                        disabled={! searchTerm}
                >
                    🔎
                </button>
            </Link>
            </div>
        </div>
    );
}

export default Searchbar;