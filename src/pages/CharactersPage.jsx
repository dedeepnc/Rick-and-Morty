import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import styles from '../components/characters.module.scss';
import Link from 'next/link';
import Footer from '../components/Footer/Footer';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
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
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => {
        setCharacters(data.results);
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
      <h1 className={styles.h1}>Rick and Morty Characters</h1>
      <div className={styles.main}>
        <div className={styles.characterGrid}>
          {characters.map(character => (
            <div key={character.id} className={styles.characterCard}>
              <img src={character.image} alt={character.name} className={styles.characterImage} />
              <div className={styles.characterInfo}>
                <h2>{character.name}</h2>
                <p>Status: {character.status}</p>
                <p>Species: {character.species}</p>
                <Link href={`/character/${character.id}`} passHref>
                  <div>View More</div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.pagination}>
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>Previous</button>
        <button onClick={() => setPage(prev => prev + 1)}>Next</button>
      </div>
      <Footer />
    </div>
  );
};

export default CharactersPage;
