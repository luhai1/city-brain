import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
import * as echarts from "echarts/lib/echarts";

export const GreenCoverage = () => {

  useEffect(() => {
    var myChart = echarts.init(document.getElementById("mai"), 'dark');
    myChart.setOption(
      {

        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['20%', '40%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },  
            data: [
              { value: 1048, name: '生产绿地' },
              { value: 735, name: '附属绿地' },
              { value: 580, name: '公园绿地' },
              { value: 484, name: '其他绿地' },
            ]
          }
        ]
      }
    
    );
  }, [])

  return (
    <div className={styles.GreenCoverage}>
      <BorderBox title={'城市建成区绿化覆盖率及绿地率'} >
        <div id="mai" style={{ width: '100%', height: '100%' }}> </div>
      </BorderBox>
    </div>
  )
}
