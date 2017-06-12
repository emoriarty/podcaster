import React from 'react'
import styles from './AppContainer.css'

const AppContainer = ({ children }) =>
  <div className={styles.appContainer}>
    {children}
  </div>

export default AppContainer
