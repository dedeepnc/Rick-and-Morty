import React, { useState } from 'react';
import Link from 'next/link';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import HeaderStyles from '../components/Header/style.module.scss';
import Styles from '../components/PrivacyPolicyPage.module.scss'; 
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '../components/Footer/Footer'; 

const PrivacyPolicyPage = () => {
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
    <div>
      <div className={HeaderStyles.header}>
        <motion.div
          className={HeaderStyles.menu}
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
      <div className={Styles.main}>
        <h1>Privacy Policy</h1>
        <p>
          This Privacy Policy applies to the website maintained by Phonnatcha Chantaro for development learning purposes.
        </p>
        <p>
          Phonnatcha Chantaro is a student of web development and has created this website as part of her educational journey.
        </p>
        <p>
          The website collects and uses personal information only for the purpose of providing information about the "Rick and Morty" series. The information is sourced from the Rick and Morty API and Wikipedia.
        </p>
        <p>
          Contact Phonnatcha Chantaro at +61415517591 or <a href="mailto:dedee.pnc@gmail.com" target="_blank" className={Styles.link}>dedee.pnc@gmail.com</a> for any inquiries or concerns regarding the privacy policy.
        </p>
      </div>
      <Footer /> 
    </div>
  );
};

export default PrivacyPolicyPage;
