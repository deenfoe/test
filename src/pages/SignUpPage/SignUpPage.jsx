import React from 'react'
import SignUpForm from '../../components/Form/SignUpForm/SignUpForm'

import styles from './SignUpPage.module.scss'

function SignUpPage() {
  return (
    <div className={styles.signUpPage}>
      <SignUpForm />
    </div>
  )
}

export default SignUpPage
