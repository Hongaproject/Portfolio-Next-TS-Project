import styles from '@/styles/Header.module.css'
import { useRouter } from 'next/router';

export default function Header() {
    
    const router = useRouter();

    const clickProfile = () => {
        router.push('/')
    }

    const clickProject = () => {
        router.push('../project')
    }
    return(
        <div className={styles.Header}>
            헤더입니다.
            <div>
                <ul className={styles.NavbarUl}>
                    <li>Home</li>
                    <li>Skills</li>
                    <li>Project</li>
                    <li>Contact</li>
                </ul>
            </div>
            <button onClick={clickProfile}>Profile</button>
            <button onClick={clickProject}>Project</button>
        </div>
    );
}