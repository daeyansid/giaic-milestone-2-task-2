// components/Footer/Footer.tsx
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} PhotoGallery. All rights reserved.</p>
      {/* Add more footer content as needed */}
    </footer>
  );
};

export default Footer;
