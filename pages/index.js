import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Elements/Header/Header'

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Jace Edwards Coding Portfolio</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
      </div>

      <main>
        <Header></Header>
      </main>
    </>
  )
}
