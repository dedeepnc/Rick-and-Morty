// CombinedComponent.js
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../components/Header/Button';
import styles from '../components/Header/style.module.scss';
import Nav from '../components/Header/Nav';
import Link from 'next/link';

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

const HomePage = () => {
    const [isActive, setIsActive] = useState(false);

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        fontFamily: 'get_schwifty, sans-serif',
        cursor: 'url("https://blog.olivierlarose.com/assets/images/cursor.png") 24 24, auto', // Blend mode cursor effect
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
            <div style={containerStyle}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1600px-Rick_and_Morty.svg.png"
                    alt="Rick and Morty"
                    style={{ maxWidth: '80%', height: 'auto' }}
                />
            </div>
        </div>
    );
};

export default HomePage;
