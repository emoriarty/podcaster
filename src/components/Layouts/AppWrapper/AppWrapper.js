import React from 'react'
import styles from './AppWrapper.css'

const AppHeader = ({ children }) =>
  <div className={styles.appWrapper}>
    {children}
  </div>

export default AppHeader
