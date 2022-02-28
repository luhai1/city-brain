import React, { useEffect } from 'react'
import styles from './index.module.less'
import shangyuqu from "../../../../assets/data/shangyuqu.json"
import * as echarts from "echarts/lib/echarts";
import {
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  VisualMapComponent,
  GeoComponent
} from 'echarts/components';
import { MapChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import axios from 'axios';

export const Map = () => {
  echarts.use([
    TitleComponent,
    ToolboxComponent,
    TooltipComponent,
    VisualMapComponent,
    GeoComponent,
    MapChart,
    CanvasRenderer
  ]);
  useEffect(() => {
    var myChart = echarts.init(document.getElementById("map"));
    echarts.registerMap('上虞区', shangyuqu);
    myChart.setOption(
      {
        series: [
          {
            name: "haah ",
            type: "map",
            map: "上虞区", // 自定义扩展图表类型
            label: {
              show: false,
            }
          }
        ]
      }
    );
  }, [])

  


  return (
    <div className={styles.Map}>
      <div id="map" style={{ width: '100%', height: '100%' }}> </div>
    </div>
  )
}
