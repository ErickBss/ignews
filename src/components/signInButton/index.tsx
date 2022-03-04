import { FaGithub } from 'react-icons/fa'

import styles from './style.module.scss'

export function SignInButton() {
  const isUserLoggedIn = true

  return (
    <button className={styles.signInButton}>
      <FaGithub color="#eba417" />
      Sign In with Git Hub
    </button>
  )
}
