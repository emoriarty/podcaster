import React from 'react'
import styles from './TwoLineLoadingListItem.css'

const TwoLineLoadingListItem = () =>
  <div className={styles.timelineItem}>
    <div className={styles.animatedBackground}>
      <div className={styles.headerTop} />
      <div className={styles.headerLeft} />
      <div className={styles.headerRight} />
      <div className={styles.headerBottom} />
      <div className={styles.subheaderLeft} />
      <div className={styles.subheaderRight} />
      <div className={styles.subheaderBottom} />
    </div>
  </div>

export default TwoLineLoadingListItem
