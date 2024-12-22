// components/Navbar/Navbar.tsx
"use client";
import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <p>PhotoGallery</p>
        </Link>
      </div>
      <ul className={`${styles.navLinks} ${menuActive ? styles.active : ''}`}>
        <li>
          <Link href="/">
            <p onClick={() => setMenuActive(false)}>Home</p>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <p onClick={() => setMenuActive(false)}>About</p>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <p onClick={() => setMenuActive(false)}>Contact</p>
          </Link>
        </li>
      </ul>
      <div className={styles.menuToggle} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;