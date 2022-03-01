import React from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
export const Plough = () => {
  return (
    <div className={styles.Plough}>
      <BorderBox title={'耕地'}>
        <div className={styles.content}>
          <div className={styles.left}>
            <div className={styles.title}>全省耕地情况</div>
            <div className={styles.number}>129.05</div>
            <div className={styles.title}>万公顷</div>
            <div className={styles.backgroundImage1}>93.36%</div>
            <div className={styles.title}>水田</div>
            <div className={styles.number}>129.05</div>
            <div className={styles.title}>万公顷</div>
          </div>

          <div className={styles.right}>
          <div className={styles.title}>全省排名</div>
          <div className={styles.number}>129.05</div>
            <div className={styles.title}>万公顷</div>
            <div className={styles.backgroundImage2}>93.36%</div>
            <div className={styles.title}>水田</div>
            <div className={styles.number}>129.05</div>
            <div className={styles.title}>万公顷</div>
          </div>
        </div>
      </BorderBox>
    </div>
  )
}
