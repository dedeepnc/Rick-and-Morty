import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Button from '../components/Header/Button';
import styles from '../components/Header/style.module.scss';
import Nav from '../components/Header/Nav';
import blobStyles from '../components/index.module.scss'; 
import Footer from '../components/footer/footer'; 
import Image from 'next/image'; 
import Head from 'next/head'; 

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
    };

    return (
        <>
            <Head>
                <title>Rick and Morty</title>
                <meta name="description" content="Rick and Morty fan site" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={blobStyles.blobWrapper}> 
                <div className={`${blobStyles.blob} ${blobStyles.blob1}`}></div>
                <div className={`${blobStyles.blob} ${blobStyles.blob2}`}></div>
                <div className={`${blobStyles.blob} ${blobStyles.blob3}`}></div>
                <div className={`${blobStyles.blob} ${blobStyles.blob4}`}></div>
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
                    <Image
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1600px-Rick_and_Morty.svg.png"
                        alt="Rick and Morty"
                        layout="responsive"
                        width={1600}
                        height={900}
                    />
                </div>
                <Footer />
            </div>
        </>
    );
};

export default HomePage;
