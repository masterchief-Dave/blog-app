import React, { useState } from 'react'
import { FaBars, FaTimes, FaCanadianMapleLeaf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styles from './header.module.css'

function Header() {
  const [click, setClick] = useState(false)

  const handleClick = () => {
    setClick((prev) => !prev)
  }

  console.log(click)
  return (
    <div id={styles.header}>
      <div id={styles.header_1}>
        <FaCanadianMapleLeaf id={styles.logo} size={33} />

        {click ? (
          <FaTimes className='' size={23} onClick={handleClick} id={styles.times} />
        ) : (
          <FaBars className='' size={23} onClick={handleClick} id={styles.bar}/>
        )}

      </div>
      <nav id={click ? styles.navbar : styles.navbar_none} className={styles.navar}>
        <ul id={styles.navbar_list}>
          <li>
            {' '}
            <Link to="/">Home</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/profile">Profile</Link>{' '}
          </li>
          <li>
            {' '}
            <Link to="/login"> Login/Register</Link>{' '}
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header