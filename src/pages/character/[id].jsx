import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Header/Nav';
import Button from '../../components/Header/Button';
import headerStyles from '../../components/Header/style.module.scss';
import styles from '../../components/CharacterDetailPage.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const CharacterDetailPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const [character, setCharacter] = useState(null);
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
    if (id) {
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
        .then(response => response.json())
        .then(data => setCharacter(data))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [id]);

  if (!character) return <div>Loading...</div>;

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
      <div className={styles['character-container']}>
        <h1>{character.name}</h1>
        <img src={character.image} alt={character.name} className={styles['character-image']} />
        <div className={styles['character-details']}>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          <p>Gender: {character.gender}</p>
          <p>Origin: {character.origin.name}</p>
          <p>Location: {character.location.name}</p>
        </div>
        <Link href="/CharactersPage" passHref legacyBehavior>
          <a className={styles['back-link']}>Back to Characters</a>
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetailPage;
