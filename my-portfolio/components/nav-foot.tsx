import styles from './component.module.css';
import Image from 'next/image';
import Linkedin from '@/public/linkedin.svg';
import Github from '@/public/github.svg';
const NavFoot = () => {
    return (
        <div className={styles.footer}>
            <div><a href={'https://www.linkedin.com/in/jun-benjamin-li/'}><Image className={styles.linkedinLogo} src={Linkedin} alt={'linkedin icon'}/></a></div>
            <div><a href={'https://github.com/benjamin-jun-li'}><Image className={styles.githubLogo} src={Github} alt={'github icon'} /></a></div>
        </div>
    )
}

export default NavFoot;