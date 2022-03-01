import React from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
import * as echarts from "echarts/lib/echarts";
import imgUrl from "../../../../assets/image/1.png"
import imgUrl2 from "../../../../assets/image/2.png"
import imgUrl3 from "../../../../assets/image/3.png"
import imgUrl4 from "../../../../assets/image/4.png"


export const City = () => {
  
  return (
    <div className={styles.City}>
      <BorderBox title={'城市建成区'} >
      <div className={styles.content}>
      <div className={styles.top}>
        <span>城市建成区面积</span>
        <div>
          <span className={styles.number}>23232 </span>&nbsp;平方千米
        </div>
      </div>
      <ul>
        <li>
         <img src={imgUrl} alt="" />
         <div>
           <span className={styles.text}>多层以上占地</span>
           <span className={styles.number}>402.22</span>
         </div>
        </li>
        <li>
         <img src={imgUrl2} alt="" />
         <div>
           <span className={styles.text}>多层以上占地</span>
           <span className={styles.number}>402.22</span>
         </div>
        </li>
        <li>
         <img src={imgUrl3} alt="" />
         <div>
           <span className={styles.text}>多层以上占地</span>
           <span className={styles.number}>402.22</span>
         </div>
        </li>
        <li>
         <img src={imgUrl4} alt="" />
         <div>
           <span className={styles.text}>多层以上占地</span>
           <span className={styles.number}>402.22</span>
         </div>
        </li>
      </ul>
      <div className={styles.unit}>单位：平方千米</div>
      </div>
      </BorderBox>
    </div>

  )
}
