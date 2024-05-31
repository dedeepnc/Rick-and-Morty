import Link from 'next/link';
import contactStyles from '../components/contact.module.scss'; 
import Footer from '../components/Footer/Footer';

const ContactPage = () => {
  return (
    <div className={contactStyles.container}>
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
              <a href="mailto:dedee.pnc@gmail.com" target="_blank" rel="noopener noreferrer">→ Email</a>
              <a href="https://github.com/yourgithubusername" target="_blank" rel="noopener noreferrer">→ Github</a>
            </div>
          </div>
        </main>
        <div className={contactStyles.backButton}>
          <Link href="/" legacyBehavior>
            <a className={contactStyles.backButtonLink}>Back to Home</a>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
