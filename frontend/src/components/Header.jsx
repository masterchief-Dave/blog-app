import React, { useState } from 'react'
import { FaTimes, FaCanadianMapleLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './header.module.css'
import { VscThreeBars } from 'react-icons/vsc'

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick((prev) => !prev)
  }

  // console.log(click)
  return (
    <div id={styles.header}>
      <div id={styles.header_1}>
        <Link to="/">
          <FaCanadianMapleLeaf id={styles.logo} size={33} fill="#fafaff" />
        </Link>

        {click ? (
          <FaTimes
            className={styles.icon}
            size={33}
            onClick={handleClick}
            id={styles.times}
            fill="#fafaff"
          />
        ) : (
          <VscThreeBars
            size={33}
            onClick={handleClick}
            id={styles.bar}
            fill="#fafaff"
          />
        )}
      </div>

      <nav
        id={click ? styles.navbar : styles.navbar_none}
        className={styles.navar}
      >
        <ul id={styles.navbar_list}>
          <li>
            {' '}
            <Link to="/" className={styles.navbar_link}>
              Home
            </Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/profile" className={styles.navbar_link}>
              Profile
            </Link>{' '}
          </li>
          <li id={styles.login}>
            {' '}
            <Link to="/login"> Login</Link>{' '}
          </li>
          <li id={styles.register}>
            {' '}
            <Link to="/register"> Register</Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
