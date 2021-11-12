import { useRouter } from "next/router"
import styles from "../styles/navbar.module.css"

const Navbar = () => {
    const router = useRouter();
    return(
        <div className={styles.main}> 
        <div className={styles.navbarContainer}>
            <ul className={styles.navbarUnderLine}>
                <div onClick = { () => router.push(`/`) }>
                    <li className={styles.navbarListLine}>Home</li>
                </div>
                <div onClick = { () => router.push(`/post/this-is-my-first-post`) }>
                     <li className={styles.navbarListLine}> Blog </li>
                </div>
                <div onClick = { () => window.location.href = "https://github.com/vinii123"}>
                     <li className={styles.navbarListLine}>Github</li>
                </div>
            </ul>
        </div>
        </div>
    )
}

export default Navbar