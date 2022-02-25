// 总体概览
import React, { useEffect, useState } from 'react'
import styles from './index.module.less'
import { BorderBox } from '../../../../components/BorderBox/index'

// 引入ECharts主模块 
import * as echarts from "echarts/lib/echarts";
// 引入饼状图需要的模块 
import "echarts/lib/chart/pie";
import "echarts/lib/component/title";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/legend";

export const GeneralOverview = () => {

    const [data, setData] = useState([
        { value: 150, name: '林地' },
        { value: 110, name: '草地' },
        { value: 150, name: '园林' },
        { value: 100, name: '商业服务业用地' },
        { value: 150, name: '工矿存储用地' },
        { value: 90, name: '住宅用地' },
        { value: 150, name: '特殊用地' },
        { value: 110, name: '公共管理与公共服务用地' },
        { value: 150, name: '交通运输用地' },
        { value: 100, name: '水域及水利设施用地' },
        { value: 150, name: '其他土地' },

    ])

    const [celldata, steCelldata] = useState(['林地',
        '草地', '园林', '商业服务业用地', '耕地',
        '工矿存储用地', '住宅用地', '特殊用地', '公共管理与公共服务用地',
        '交通运输用地', '水域及水利设施用地', '其他土地'])

    useEffect(() => {
        var myChart = echarts.init(document.getElementById("main"), 'dark');
        myChart.setOption(
            {
                title: {
                    text: '',
                    left: 'center'
                },
                legend: {
                    left: 'center',
                    top: 'bottom',
                    data: celldata
                },
                toolbox: {
                    show: false,
                    feature: {
                        mark: { show: true },
                        dataView: { show: true, readOnly: false },
                        magicType: {
                            show: false,
                            type: ['pie', 'funnel']
                        },
                        restore: { show: false },
                        saveAsImage: { show: false }
                    }
                },
                series: [
                    {
                        name: '总体概览',
                        type: 'pie',
                        radius: [10, 50],
                        center: ['70%', '40%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 4,
                            borderColor: '#fff',
                            borderWidth: 1
                        },
                        label: {
                            show: false,
                            position: 'center'
                        },

                        labelLine: {
                            show: false
                        },
                        data: data
                    }
                ]
            }
        );
    }, [])

    return (
        <div className={styles.generalOverview} >
            <BorderBox title={'总体概览'} time={'( 2021年 )'}>
                <div id="main" style={{ width: '100%', height: 300 }}> </div>
            </BorderBox>
        </div>
    )
}
