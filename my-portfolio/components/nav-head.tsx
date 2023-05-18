import Link from 'next/link';
import styles from './component.module.css';

const NavHead = () => {
    return (
      <div className={styles.header}>
          <ul className={styles.links}>
              <li><Link className={styles.link} href={'/'}>Home</Link></li>|
              <li><Link className={styles.link} href={'/about'}>about</Link></li>|
              <li><Link className={styles.link} href={'/projects'}>projects</Link></li>
          </ul>
      </div>
    )
}

export default NavHead;