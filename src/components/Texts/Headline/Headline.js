import React from 'react'
import styles from './Headline.css'

const Headline = ({ children }) =>
  <h2 className={styles.headline}>
    {children}
  </h2>

export default Headline
