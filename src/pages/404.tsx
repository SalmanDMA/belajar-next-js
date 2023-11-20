import styles from '@/styles/404.module.scss';
import Image from 'next/image';
const Custom404 = () => {
 return (
  <div className={styles.error}>
   {/* <img src='/notfound.png' alt='notfound' className={styles.error__image} /> */}
   <Image src='/notfound.png' alt='notfound' width={600} height={600} className={styles.error__image} />
   <div> Halaman Tidak Ditemukan</div>
  </div>
 );
};

export default Custom404;
