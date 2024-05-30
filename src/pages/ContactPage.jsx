import { useState, useRef, useEffect } from 'react'; 
import { motion, AnimatePresence } from 'framer-motion';
import Nav from '../components/Header/Nav';
import Button from '../components/Header/Button';
import headerStyles from '../components/Header/style.module.scss';
import contactStyles from '../components/contact.module.scss'; 
import { disperse } from '../components/anim';
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
          <TextDipserse setBackground={() => {}}>
            <p>+61415517591</p>
          </TextDipserse>
          <TextDipserse setBackground={() => {}}>
            <a href="mailto:dedee.pnc@gmail.com" target="_blank">→Email</a>
          </TextDipserse>
          <TextDipserse setBackground={() => {}}>
            <a href="https://github.com/yourgithubusername" target="_blank">→Github</a>
          </TextDipserse>
        </div>
      </main>
      <div className={contactStyles.contactLink}>
        <Link href="/" passHref>
          <div>
            Back to Home
          </div>
        </Link>
      </div>
    </div>
  );
};

function TextDipserse(props) {
  const { children, setBackground } = props;
  const [isAnimated, setIsAnimated] = useState(false);

  const getChars = (element) => {
    let chars = [];
    if(children.length){
      children.forEach( (el, i) => {
        chars.push(splitWord(el.props.children, i))
      })
    }
    else{
      chars.push(splitWord(element.props.children, 1))
    }
    return chars;
  }

  const splitWord = (word, indexOfWord) => {
    let chars = [];
    word.split("").forEach( (char, i) => {
      chars.push(<motion.span custom={indexOfWord * i} variants={disperse} animate={isAnimated ? "open" : "closed"} key={char + i}>{char}</motion.span>)
    })
    return chars;
  }

  const manageMouseEnter = () => {
    setBackground(true)
    setIsAnimated(true);
  }
  const manageMouseLeave = () => {
    setBackground(false)
    setIsAnimated(false);
  }

  return (
    <div style={{cursor: "pointer"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave(false)}} className={contactStyles.introLine}>
      { getChars(children) }
    </div>
  )
}

export default ContactPage;
