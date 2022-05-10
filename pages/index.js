import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer/Footer'
import Hero from '../components/Hero/Hero'
import Navbar from '../components/Navbar/Navbar'
import Roadmap from '../components/Roadmap/Roadmap'
import Team from '../components/Team/Team'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>MetaRentals</title>
        <meta name="description" content="Bridging community and Travel. Find vaction homes, apartments cabins on MetaRentals " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Navbar/>
          <Hero/>
          <Roadmap/>
          <Team/>
          <Footer/>
      </main>
       
       </div>
  )
}
