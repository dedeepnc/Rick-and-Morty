import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import pageStyles from '../components/AboutRickNMorty.module.scss';
import axios from 'axios';
import Footer from '../components/Footer/Footer'; 
import Link from 'next/link';
import Image from 'next/image';

const AboutRickAndMortyPage = () => {
  const [characters, setCharacters] = useState([]);
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
    const fetchCharacters = async () => {
      try {
        const characterNames = ['Rick Sanchez', 'Morty Smith', 'Summer Smith', 'Beth Smith', 'Jerry Smith'];
        const promises = characterNames.map(name =>
          axios.get('https://rickandmortyapi.com/api/character', {
            params: { name }
          })
        );
        const responses = await Promise.all(promises);
        const charactersData = responses.map(response => {
          console.log(response.data.results[0]); // Log each character's data
          return response.data.results[0];
        });
        setCharacters(charactersData);
      } catch (error) {
        console.error('Error fetching characters:', error);
      }
    };

    fetchCharacters();
  }, []);

  return (
    <div className={pageStyles.rickAndMortyPage}>
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
      <header className={pageStyles.header}>
        <h1>Rick and Morty</h1>
      </header>
      <main className={pageStyles.main}>
        <section className={pageStyles.section}>
          <h2>Introduction</h2>
          <div className={pageStyles.centerContent}>
            <Image
              src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png"
              alt="Rick and Morty Portal"
              width={550}
              height={350}
            />
          </div>
          <p>
            Rick and Morty is an American animated television series created by Justin Roiland and Dan Harmon. The show follows the misadventures of cynical mad scientist Rick Sanchez and his good-hearted but fretful grandson Morty Smith, who split their time between domestic life and interdimensional adventures.
          </p>
        </section>
        <section className={pageStyles.section}>
          <h2>Plot</h2>
          <p>The series centers on the Smith family, which consists of parents Jerry and Beth, their children Summer and Morty, and Beth&apos;s father, Rick Sanchez, who lives with them as a guest. According to Justin Roiland, the family lives outside of Seattle, Washington. The adventures of Rick and Morty, however, take place across an infinite number of realities, with the characters traveling to other planets and dimensions through portals and Rick&apos;s flying saucer.</p>
        </section>
        <section className={pageStyles.section}>
          <h2>Characters</h2>
          {characters && characters.length > 0 && characters.map((character) => (
            <div key={character.id} className={pageStyles.character}>
              {character.image ? (
                <Image src={character.image} alt={character.name} width={200} height={200} className={pageStyles.characterImage} />
              ) : (
                <div className={pageStyles.noImage}>Image not available</div>
              )}
              <div className={pageStyles.characterInfo}>
                <h3>{character.name}</h3>
                <p>{character.status} - {character.species}</p>
                <p>{character.gender}</p>
              </div>
            </div>
          ))}
        </section>
        <section className={pageStyles.section}>
          <h2>Reception</h2>
          <p>Rick and Morty has received critical acclaim for its originality, creativity, and humor. The show has been praised for its characters, cultural references, and unique blend of comedy and science fiction. It has gained a large following and has become a significant part of popular culture.</p>
        </section>
        <section className={pageStyles.section}>
          <h2>References</h2>
          <p>
            Information sourced from 
            <Link href="https://en.wikipedia.org/wiki/Rick_and_Morty" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">Wikipedia</a>
            </Link>.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutRickAndMortyPage;
