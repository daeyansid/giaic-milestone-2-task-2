// app/page.tsx
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import styles from './page.module.css';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

const HomePage: React.FC = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      
      <main className={styles.main}>
        <></>
        <h1>Welcome to PhotoGallery</h1>
        <PhotoGallery />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
