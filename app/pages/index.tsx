// pages/index.tsx
import type { NextPage } from 'next';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import PhotoGallery from '../components/PhotoGallery/PhotoGallery';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Navbar />

      <main className={styles.main}>
        <h1>Welcome to PhotoGallery</h1>
        <p>Explore the best photos from around the world.</p>
        <PhotoGallery />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
