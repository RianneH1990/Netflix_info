import React from 'react';
import styles from './Home.module.css';
import poster1 from '../../image/poster1.jpg';
import poster2 from '../../image/poster2.jpg';
import poster3 from '../../image/poster3.jpg';
import poster4 from '../../image/poster4.jpg';
import poster5 from '../../image/poster5.jpg';


function Home() {
    return (
        <>
            <div className={styles["header"]}>
                <h1>Checkflix</h1>
                <h3>The app to check what Netflix content is available per country</h3>
                <p className={styles["homeText"]}>Going on a holiday and want to know if you can keep watching your favorite Netflix show. Checkflix makes it possible to check what content is available for you.</p>
                <p className={styles["homeText"]}>You can look for a movie or TV-show by searching by title of what you are looking for. The information about the movie or show will inform in what countries it is available.</p>
                <p className={styles["homeText"]}>Or you can look for all the movies or TV-shows that are available in a country. Just select the country you want to check and if you want to see the movies or TV-shows.
                    You will get all the results that are available in that country.</p>
                <p className={styles["homeText"]}>Also there are options to see what is coming to Netflix and what is going to be deleted from Netflix. So you will be able to see what Tv-shows and movies to look forward to. But also when you need to hurry up finishing what you are watching.</p>
            </div>
            <div className={styles["posters"]}>
                <img className={styles["poster"]} src={poster1} alt="poster1"/>
                <img className={styles["poster"]} src={poster2} alt="poster2"/>
                <img className={styles["poster"]} src={poster3} alt="poster3"/>
                <img className={styles["poster"]} src={poster4} alt="poster4"/>
                <img className={styles["poster"]} src={poster5} alt="poster5"/>
            </div>
        </>
    )
}

export default Home