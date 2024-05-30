import { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import styles from '../components/Header/style.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

const PrivacyPolicyPage = () => {
  const [isActive, setIsActive] = useState(false); // Define isActive state here

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
      <h1>Privacy Policy</h1>
      <p>This is the privacy policy content.</p>
      <Link href="/" passHref>
        <div>
          Back to Home
        </div>
      </Link>
    </div>
  );
};

export default PrivacyPolicyPage;
