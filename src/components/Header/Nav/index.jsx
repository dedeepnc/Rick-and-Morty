import { motion } from 'framer-motion';
import { links, footerLinks } from './data';
import { perspective, slideIn } from "./anim";
import styles from './style.module.scss';

export default function Nav() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                href={href}
                custom={i}
                variants={perspective}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a href={href}>{title}</a>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks && footerLinks.map((link, i) => {
          const { title, href } = link;
          return (
            <motion.a 
              variants={slideIn}
              custom={i} 
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
              href={href}
            >
              {title}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
