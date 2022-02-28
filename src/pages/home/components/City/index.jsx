import React from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
import * as echarts from "echarts/lib/echarts";

export const City = () => {
  
  return (
    <div className={styles.City}>
      <BorderBox title={'城市建成区'} >
        {/* <div id="mai" style={{ width: '100%', height: '100%' }}> </div> */}
      </BorderBox>
    </div>

  )
}
