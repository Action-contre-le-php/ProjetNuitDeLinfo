import Head from 'next/head'
import Image from 'next/image'
import NavBar from '../components/navBar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <NavBar/>
      <div className={styles.container}>
        <p>home page</p>
      </div>
    </div>
  )
}
