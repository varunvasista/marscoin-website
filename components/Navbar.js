import styles from "../styles/Navbar.module.css"
import Link from "next/link"
import { ConnectButton } from '@rainbow-me/rainbowkit';

function Navbar() {

    return (
        <>
            <nav className={styles.navWrapper}>
                <div className={styles.navbar}>
                    <div className={styles.logoSection}>
                        <Link href=""><a>
                            {/* <h1 className={styles.logoText}>Mars Coin</h1> */}
                            <img src="/mars.png" alt="Mars Logo" className={styles.logoImage} />
                        </a></Link>
                    </div>
                    <div className={styles.menuSection}>
                        <ul className={styles.menu}>
                            <li><Link href="#about"><a className={styles.menuItem}><i className={`las la-info-circle`}></i> About</a></Link></li>
                            <li><Link href="#token"><a className={styles.menuItem}><i className={`las la-stop-circle`}></i> Token</a></Link></li>
                            <li><Link href="#team"><a className={styles.menuItem}><i className={`las la-user-alt`}></i> Team</a></Link></li>
                            <li><Link href="#roadmap"><a className={styles.menuItem}><i className={`las la-map-pin`}></i> Roadmap</a></Link></li>
                            <li><Link href="#contact"><a className={styles.menuItem}><i className={`las la-phone`}></i> Contact</a></Link></li>
                        </ul>
                        <ConnectButton showBalance={{
    smallScreen: false,
    largeScreen: false,
  }}/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
