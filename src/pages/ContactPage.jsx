import { useState } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import contactStyles from '../components/contact.module.scss'; 
import Footer from '../components/Footer/Footer';
import Link from 'next/link';

const ContactPage = () => {
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
    <div className={contactStyles.container}>
      {/* Menu */}
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

      {/* Content */}
      <div className={contactStyles.content}>
        <div className={contactStyles.mark}>CONTACT</div>
        <main className={contactStyles.main}>
          <div className={contactStyles.body}>
            <div className={contactStyles.introLine}>
              <p>Phonnatcha</p> 
              <p>Chantaro</p>
            </div>
            <div className={contactStyles.introLine}>
              <p>Website</p>
            </div>
            <div className={contactStyles.introLine}>
              <p>development</p>
              <p>Student</p>
            </div>
            <div className={contactStyles.contact}>
              <a href="mailto:dedee.pnc@gmail.com" target="_blank">→ Email</a>
              <a href="https://github.com/yourgithubusername" target="_blank">→ Github</a>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
