import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import styles from './style.module.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.header}>
        <Link href="/" passHref legacyBehavior>
          <motion.a
            variants={perspective}
            initial="initial"
            animate="enter"
            exit="exit"
            className={styles.logo}
          >
        
          </motion.a>
        </Link>
      </div>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <Link href={href} passHref legacyBehavior>
                  <a>{title}</a>
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks && footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <Link key={`f_${i}`} href={href} passHref legacyBehavior>
              <motion.a
                variants={slideIn}
                custom={i}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {title}
              </motion.a>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
}
