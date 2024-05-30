import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import styles from '../components/Header/style.module.scss';
import pageStyles from '../components/LocationsPage.module.scss';

const LocationsPage = () => {
  const [locations, setLocations] = useState([]);
  const [page, setPage] = useState(1);
  const [isActive, setIsActive] = useState(false);

  const menu = {
    open: {
      width: "480px",
      height: "550px",
      top: "-25px",
      right: "-25px",
      transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] }
    },
    closed: {
      width: "100px",
      height: "40px",
      top: "0px",
      right: "0px",
      transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }
    }
  };

  const emojis = ['🌍', '🏞️', '🏙️', '🌌', '🏝️', '🗺️', '🌋', '🏔️', '🏜️', '🏕️'];

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/location?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setLocations(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  const getRandomEmoji = () => {
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  return (
    <div>
      <div className={styles.header}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>
            {isActive && <Nav />}
          </AnimatePresence>
        </motion.div>
        <Button isActive={isActive} toggleMenu={() => { setIsActive(!isActive) }} />
      </div>
      <div className={pageStyles.mainContent}>
        <h1>Rick and Morty Locations</h1>
        <div className={pageStyles.locationsGrid}>
          {locations.map(location => (
            <div key={location.id} className={pageStyles.locationCard}>
              <span className={pageStyles.emoji}>{getRandomEmoji()}</span>
              <h2>{location.name}</h2>
              <p>Type: {location.type}</p>
              <p>Dimension: {location.dimension}</p>
            </div>
          ))}
        </div>
        <div className={pageStyles.pagination}>
          <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
          <button onClick={() => setPage(prev => prev + 1)}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default LocationsPage;
