import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <NavLink to="/" className={styles.logo}>
        TJ👨🏾‍💻
      </NavLink>
      <input className={styles.menuBtn} type="checkbox" id="menu-btn" />
      <label className={styles.menuIcon} for="menu-btn">
        <span className={styles.navIcon}></span>
      </label>

      <ul className={styles.menu}>
        <li>
          <NavLink to="/" className={styles.navlink}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className={styles.navlink}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" className={styles.navlink}>
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={styles.navlink}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={`${styles.navlink} ${styles.contact}`}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
