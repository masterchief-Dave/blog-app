import React from 'react'
import Header from '../components/Header'
import styles from './home.module.css'

function Home() {
  return (
    <div id={styles.header}>
      <Header />
      this is the home page
    </div>
  )
}

export default Home