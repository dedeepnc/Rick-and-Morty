import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';
import Nav from '../../components/Header/Nav';
import Button from '../../components/Header/Button';
import headerStyles from '../../components/Header/style.module.scss';
import styles from '../../components/CharacterDetailPage.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const CharacterDetailPage = ({ character }) => {
  const router = useRouter();
  const { id } = router.query;
  const [isActive, setIsActive] = useState(false);

  if (!character) return <div>Loading...</div>;

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
          {character.origin && <p>Origin: {character.origin.name}</p>}
          {character.location && <p>Location: {character.location.name}</p>}
        </div>
        <Link href="/CharactersPage" passHref>
          <div className={styles['back-link']}>Back to Characters</div>
        </Link>
      </div>
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context.query;

  try {
    const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
    const character = await res.json();

    return {
      props: {
        character,
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        character: null,
      },
    };
  }
}

export default CharacterDetailPage;
