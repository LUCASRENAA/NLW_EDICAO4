import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'

import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    
    <div className={styles.container}>
  

  <ExperienceBar />

      <section>
        <div className={styles.container}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
        <div className={styles.container}>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>
      </section>
    </div>
  )
}
