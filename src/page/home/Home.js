import React from 'react';
import styles from './Home.module.css';
import poster1 from '../../image/poster1.jpg';
import poster2 from '../../image/poster2.jpg';
import poster3 from '../../image/poster3.jpg';
import poster4 from '../../image/poster4.jpg';
import poster5 from '../../image/poster5.jpg';





function Home(props) {

    return (
        <>
            <div className={styles["header"]}>
                <h1>Checkflix</h1>
                <h3>The app to check what Netflix content is available per country</h3>
                <p>Going on a holiday and want to know if you can keep watching your favorite Netflix show. Checkflix makes it possible to check what content is available for you.</p>
                <p>You can look for a movie or TV-show by searching by title of what you are looking for. The information about the movie or show will show in what countries it is available.</p>
                <p>Or you can look for al the movies or TV-shows that are available in a country. Just select the country you want to check and if you want to see the movies or TV-shows.
                    You will get all the results that are available in that country.</p>
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