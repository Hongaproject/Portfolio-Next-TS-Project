import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {

    const router = useRouter()

    const clickSub = () => {
        router.push('./sub')
    }
        return(
        <div className={styles.nav}>
            <Link href="/">
                Home
            </Link>
            {/* <Link href="/sub">
                Sub
            </Link> */}
            <button className={styles.btn} onClick={clickSub}>Sub</button>
        </div>
    );
}