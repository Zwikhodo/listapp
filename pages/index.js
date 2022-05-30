import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Homepage</title>
    </Head>
    <div >
      <h1 className={styles.title}>Hompage</h1>
      <p>fvgb gnjfcedkmw megormfvmwngrovfmcepdvinrowfvmwcivmrogmwfce</p>
      <Link href="/people">
        <a className={styles.btn} >Go to names</a>
        </Link>
      
    </div>
    </>
  )
}
