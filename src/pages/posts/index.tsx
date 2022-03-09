import Head from 'next/head'
import styles from './style.module.scss'

export default function Posts() {
  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>march 8 of 2022</time>
            <strong>
              A corrida para o prêmio de MVP da NBA 2021/2022 | Mês 3
            </strong>
            <p>
              Após mais um mês de bola quicando na NBA, o The Playoffs lança a
              terceira edição da corrida para o prêmio de MVP da temporada
              2021-22 da NBA.
            </p>
          </a>
          <a href="#">
            <time>march 8 of 2022</time>
            <strong>
              A corrida para o prêmio de MVP da NBA 2021/2022 | Mês 3
            </strong>
            <p>
              Após mais um mês de bola quicando na NBA, o The Playoffs lança a
              terceira edição da corrida para o prêmio de MVP da temporada
              2021-22 da NBA.
            </p>
          </a>
          <a href="#">
            <time>march 8 of 2022</time>
            <strong>
              A corrida para o prêmio de MVP da NBA 2021/2022 | Mês 3
            </strong>
            <p>
              Após mais um mês de bola quicando na NBA, o The Playoffs lança a
              terceira edição da corrida para o prêmio de MVP da temporada
              2021-22 da NBA.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
