// components/PhotoGallery/PhotoGallery.tsx
import Image from 'next/image';
import styles from './PhotoGallery.module.css';

const photos = [
  { src: '/images/photo1.jpg', alt: 'Photo 1' },
  { src: '/images/photo2.jpg', alt: 'Photo 2' },
  { src: '/images/photo3.jpg', alt: 'Photo 3' },
  { src: '/images/photo4.jpg', alt: 'Photo 4' },
  { src: '/images/photo5.jpg', alt: 'Photo 5' },
  { src: '/images/photo6.jpg', alt: 'Photo 6' },
];

const PhotoGallery: React.FC = () => {
  return (
    <section className={styles.gallery}>
      <h2>Photo Gallery</h2>
      <div className={styles.photoGrid}>
        {photos.map((photo, index) => (
          <div key={index} className={styles.photoItem}>
            <Image
              src={photo.src}
              alt={photo.alt}
              layout="responsive"
              width={300}
              height={200}
              className={styles.photo}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
