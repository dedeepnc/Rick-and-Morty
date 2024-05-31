import React, { useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import styles from '../components/SearchPage.module.scss';
import Footer from '../components/footer/footer'; 
import Link from 'next/link';

const SearchPage = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searchType, setSearchType] = useState('character');
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

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/${searchType}/?name=${query}`);
      setResults(response.data.results);
    } catch (error) {
      console.error('Error fetching search results:', error);
    }
  };

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
      <div className={styles.searchContainer}>
        <div className={styles.tabs}>
          <div
            className={`${styles.tab} ${searchType === 'character' ? styles.active : ''}`}
            onClick={() => setSearchType('character')}
          >
            Characters
          </div>
          <div
            className={`${styles.tab} ${searchType === 'episode' ? styles.active : ''}`}
            onClick={() => setSearchType('episode')}
          >
            Episodes
          </div>
          <div
            className={`${styles.tab} ${searchType === 'location' ? styles.active : ''}`}
            onClick={() => setSearchType('location')}
          >
            Locations
          </div>
        </div>
        <input
          type="text"
          placeholder={`Enter ${searchType} name`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.searchInput}
        />
        <button onClick={handleSearch} className={styles.searchButton}>Search</button>
      </div>
      <div className={styles.results}>
        {results && results.map((result) => (
          <div key={result.id} className={styles[`${searchType}Card`]}>
            <h2>{result.name}</h2>
            {searchType === 'character' && (
              <>
                <img src={result.image} alt={result.name} className={styles.characterImage} />
                <p>Status: {result.status}</p>
                <p>Species: {result.species}</p>
                <div>
                  <Link href={`/character/${result.id}`} passHref legacyBehavior>
                    <a className={styles.viewMore}>View More</a>
                  </Link>
                </div>
              </>
            )}
            {searchType === 'episode' && <p>Episode: {result.episode}</p>}
            {searchType === 'location' && <p>Type: {result.type}</p>}
          </div>
        ))}
      </div>
      <Footer /> 
    </div>
  );
};

export default SearchPage;
