// pages/about.tsx
import type { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import styles from './About.module.css';

const About: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1>About Us</h1>
        <p>
          Welcome to PhotoGallery! We are passionate about capturing and showcasing the beauty of the world through stunning photographs.
        </p>
        <p>
          Our mission is to provide a platform where photographers can share their work and art enthusiasts can explore diverse collections of photos.
        </p>
        {/* Add more content as needed */}
      </main>

      <Footer />
    </div>
  );
};

export default About;
