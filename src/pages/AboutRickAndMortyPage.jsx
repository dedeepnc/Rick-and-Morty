import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import pageStyles from '../components/AboutRickAndMortyPage.module.scss'; // Updated import

const AboutRickAndMortyPage = () => {
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
  return (
    <div className="rick-and-morty-page">

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
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <section>
          <h2>Introduction</h2>
          <p>[Introduction content goes here]</p>
        </section>
        <section>
          <h2>Plot</h2>
          <p>[Plot summary goes here]</p>
        </section>
        <section>
          <h2>Characters</h2>
          <p>[Information about main characters]</p>
        </section>
        <section>
          <h2>Reception</h2>
          <p>[Reception details]</p>
        </section>
        <section>
          <h2>References</h2>
          <p>Information sourced from <a href="https://en.wikipedia.org/wiki/Rick_and_Morty">Wikipedia</a>.</p>
        </section>
      </main>
      <footer>
        <p>© 2024 Rick and Morty Fan Page</p>
      </footer>
    </div>
  );
};

export default AboutRickAndMortyPage;
