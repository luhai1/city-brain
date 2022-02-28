import React, { useEffect } from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
import * as echarts from "echarts/lib/echarts";

export const GreenCoverage = () => {

  useEffect(() => {
    var myChart = echarts.init(document.getElementById("GreenCoverage"));
    myChart.setOption(
      {
        legend: {
          top: '0%',
          left: 'center',
          textStyle: {
            color: '#fff'  // 图例文字颜色
          }
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['14%', '30%'],
            label: {
              normal: {
                textStyle: {
                  color: '#fff'
                }
              },
            },
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 4,
              borderColor: '#fff',
              borderWidth: 1
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
        <div id="GreenCoverage" style={{ width: '100%', height: '90%' }}> </div>
      </BorderBox>
    </div>
  )
}
