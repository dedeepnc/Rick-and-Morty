import React from 'react';
import { motion } from 'framer-motion';
import styles from '../components/error.module.scss';

const NotFound = () => {
  return (
    <motion.div
      className={styles["not-found-container"]}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.div
        className={styles["background"]}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      />
      <motion.div
        className={styles["content"]}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          404 Not Found
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Sorry, the page you're looking for does not exist.
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default NotFound;
