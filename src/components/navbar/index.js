import { useState } from 'react'
import { NavHashLink as NavLink } from 'react-router-hash-link'
import { FiMenu, FiX } from 'react-icons/fi'
import { MenuList } from './MenuList'
import styles from './Navbar.module.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const handleClick = () => {
    setOpen(!open)
  }

  const closeMenu = () => {
    setOpen(false)
  }

  const menuList = MenuList.map(({ url, title }, index) => {
    return (
      <li key={index} className={styles.nav__item}>
        <NavLink
          to={url}
          smooth
          className={styles.nav__link}
          onClick={closeMenu}
        >
          {title}
        </NavLink>
      </li>
    )
  })

  return (
    <nav className={styles.navbar}>
      <NavLink to="#home" smooth className={styles.logo} onClick={closeMenu}>
        TJ👨🏾‍💻
      </NavLink>

      <div className={styles.nav__icon} onClick={handleClick}>
        {open ? <FiX /> : <FiMenu />}
      </div>

      <ul className={open ? `${styles.menu} ${styles.active}` : styles.menu}>
        {menuList}
      </ul>
    </nav>
  )
}
