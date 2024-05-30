import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import pageStyles from '../components/EpisodesPage.module.scss';

const EpisodesPage = () => {
  const [episodes, setEpisodes] = useState([]);
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

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setEpisodes(data.results);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, [page]);

  return (
    <div>
      <div className={headerStyles.header}>
        <motion.div
          className={headerStyles.menu}
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
        <h1>Rick and Morty Episodes</h1>
        <div className={pageStyles.episodesContainer}>
          {episodes && episodes.map(episode => (
            <div key={episode.id} className={pageStyles.episodeCard}>
              <h2>🍿 {episode.name} 🎬</h2>
              <p>Air Date: {episode.air_date}</p>
              <p>Episode: {episode.episode}</p>
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

export default EpisodesPage;
