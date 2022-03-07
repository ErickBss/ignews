import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'

import { signIn, signOut, useSession } from 'next-auth/react'

import styles from './style.module.scss'

export function SignInButton() {
  const { data: session } = useSession()
  console.log('session:', session)

  return session ? (
    <button className={styles.signInButton} onClick={() => signOut()}>
      <FaGithub color="#04d361" />
      {session.user.name}
      <FiX color="#737380" className={styles.closeIcon} />
    </button>
  ) : (
    <button className={styles.signInButton} onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
      Sign In with Git Hub
    </button>
  )
}
