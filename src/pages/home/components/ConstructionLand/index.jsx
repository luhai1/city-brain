import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'
import * as echarts from "echarts";


export const ConstructionLand = () => {
  const option = {
    legend: {
      left: '74%',
      textStyle: {
        color: '#fff'  // 图例文字颜色
      },
      data: ['2019年', '2020年']
    },
    tooltip: {},
    xAxis: {
      type: 'category',
      data: ['城市', '建制镇', '村庄', '采矿', '风景名胜', '铁路', '轨道交通', '机场', '港口码头', '管道运输', '水工建筑']
    },
    yAxis: {
      type: 'value',
    },
    series: [    {
      name: '2019年',
      type: 'bar',
      data: [
        122.0, 422.9, 7.0, 223.2, 25.6, 76.7, 135.6, 162.2, 32.6, 201.0, 446.4
      ],
    },
    {
      name: '2020年',
      type: 'bar',
      data: [
        62.6, 45.9, 90.0, 216.4, 28.7, 70.7, 175.6, 182.2, 948.7, 18.8, 556.0
      ],
    }]
  };

  useEffect(() => {
    var myChart = echarts.init(document.getElementById("ConstructionLand"));
    myChart.setOption(option);
  }, [])

  return (
    <div className={styles.constructionLand}>
      <BorderBox title={'建设用地'} >
        <div id="ConstructionLand" style={{ width: '100%', height: "92%" }}> </div>
      </BorderBox>
    </div>
  )
}
