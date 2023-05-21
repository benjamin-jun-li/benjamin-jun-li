import Link from 'next/link';
import styles from './component.module.css';
import Image from "next/image";
import Linkedin from "@/public/linkedin.png";
import Github from "@/public/github.png";
import Instagram from '@/public/instagram.png';
import Gmail from '@/public/email.png';
const NavHead = () => {
    const emailAddress:string = 'benjaminli060@gmail.com';
    return (
      <div className={styles.header}>
          <div className={styles.nameLogo}>Benjamin</div>
          <div>
          <ul className={styles.links}>
              <li><Link className={styles.link} href={'/'}>Home</Link></li>|
              <li><Link className={styles.link} href={'/about'}>about</Link></li>|
              <li><Link className={styles.link} href={'/projects'}>projects</Link></li>
          </ul>
          </div>
          <div className={styles.headerIcons}>
              <div><a href={'https://www.linkedin.com/in/jun-benjamin-li/'}><Image className={styles.linkedinLogo} src={Linkedin} alt={'linkedin icon'}/></a></div>
              <div><a href={'https://github.com/benjamin-jun-li'}><Image className={styles.githubLogo} src={Github} alt={'github icon'} /></a></div>
              <div><a href={'https://www.instagram.com/benjaminli06/'}><Image  className={styles.insLogo} src={Instagram} alt={'ins icon'} /></a></div>
              <div><a href={`mailto:${emailAddress}`}><Image  className={styles.gmailLogo} src={Gmail} alt={'gmail icon'} /></a></div>
          </div>
      </div>
    )
}

export default NavHead;