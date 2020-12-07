const bgColor = '#fff',
    xLabelColor = '#999999',
    xLineColor = '#E5E5E5',
    yLabelColor = '#999999',
    yLineColor = '#E5E5E5',
    tooltipColor = '#fff',
    tooltipBgColor = 'rgba(0,0,0,0.3)',
    tooltipBordeColor = 'rgba(0,0,0,0)';
const mColor = ['#618bf8', '#627191', '#64daa4', '#f8c313', '#29a7f2', '#fd8608', '#58ba2d', '#1879ff', '#1db7b6', '#f05459'];
/**
 * 柱状图配置项
 * @param {Array} xAxis_data ---x轴数据
 * @param {Object} series_data ---series数据
 * @param {boolean} Multi_column ---是否多柱-还是柱形堆叠图
 * 
 */
export function Columnar(xAxis_data, series_data, Multi_column) {
    
    let series = []
    if (Multi_column) {
        series_data.forEach((element, idnex) => {
            series.push({
                name: element.name,
                type: 'bar',
                barWidth: '20',
                label: {
                    show: true,
                    position: 'top'
                },
                color: mColor[idnex],
                itemStyle: {
                    normal: {
                        barBorderRadius: [4]
                    }
                },
                markLine: {
                    silent: true, //响应和触发鼠标事件
                    label: {
                        position: 'start'
                    },
                    lineStyle: {
                        color: mColor[idnex],
                        opacity: 1,
                        width: 1
                    },
                    data: [
                        {
                            type: 'average',
                            name: '平均值'
                        }
                    ]
                },
                data: element.data
            })
        });
    } else {
        series_data.forEach((element, index) => {
            series.push({
                name: element.name,
                type: 'bar',
                stack: 'one',
                barWidth: '17',
                label: {
                    show: false,
                    position: 'top'
                },
                zlevel: 3,
                data: element.data,
                color: mColor[index],

                markLine: {
                    silent: true, //响应和触发鼠标事件
                    label: {
                        position: 'start'
                    },
                    lineStyle: {
                        color: mColor[index],
                        opacity: 1,
                        width: 1
                    },
                    data: [
                        {
                            type: 'average',
                            name: '平均值'
                        }
                    ]
                }
            })
        });
    }
    return {
        backgroundColor: bgColor,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                // 坐标轴指示器，坐标轴触发有效
                type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            },
            backgroundColor: tooltipBgColor,
            borderWidth: 2,
            borderColor: tooltipBordeColor,
            showContent: true,
            padding: 10,
            textStyle: {
                color: tooltipColor
            },
            extraCssText: 'width: 170px'
        },
        legend: {
            orient: 'horizontal',
            align: 'left',
            bottom: 10,
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 10,
            textStyle: {
                color: xLabelColor,
                fontSize: 12
            }
        },
        grid: {
            left: '20',
            top: '25',
            right: '20',
            bottom: '40',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                splitLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: xLabelColor,
                    fontSize: 12,
                    rotate: 0
                },
                axisLine: {
                    lineStyle: {
                        color: xLineColor
                    }
                },
                data: xAxis_data
            }
        ],
        yAxis: [
            {
                type: 'value',
                boundaryGap: true,
                axisTick: {
                    show: false
                },
                axisLabel: {
                    interval: 0,
                    color: yLabelColor,
                    fontSize: 12
                },
                axisLine: {
                    lineStyle: {
                        color: yLineColor
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: yLineColor,
                        type: 'dashed'
                    }
                },
                axisPointer: {
                    lineStyle: {
                        color: yLineColor
                    }
                }
            }
        ],
        series
    }
}
/**
 * 折线图配置项
 * @param {Array} xAxis_data ---x轴数据
 * @param {Object} series_data ---series数据
 * @param {boolean} Multi_column ---是否常规折线图-还是折线面积图
 * 
 */

export function broken_line(xAxis_data, series_data, Multi_column) {
    let series = []
    if (Multi_column) {
        series_data.forEach((element, index) => {
            series.push({
                name: element.name,
                type: 'line',
                data: element.data,
                color: mColor[index]
            })
        });
    } else {
        series_data.forEach((element, index) => {
            series.push({
                name: element.name,
                data: element.data,
                color: mColor[index],
                markLine: {
                    silent: true, //响应和触发鼠标事件
                    label: {
                        position: 'start'
                    },
                    lineStyle: {
                        color: mColor[index],
                        opacity: 1,
                        width: 1
                    },

                },
                type: 'line',
                smooth: true,
                symbolSize: 6,
                areaStyle: {
                    opacity: 0.4
                },
                itemStyle: {
                    opacity: 1
                },
                lineStyle: {
                    opacity: 1,
                    width: 2
                }
            })
        });
    }
    return {
        backgroundColor: bgColor,
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: xLineColor,
                    type: 'dashed'
                },
                label: {
                    backgroundColor: xLineColor
                }
            },
            backgroundColor: tooltipBgColor,
            borderWidth: 2,
            borderColor: tooltipBordeColor,
            showContent: true,
            padding: 10,
            textStyle: {
                color: tooltipColor
            },
            extraCssText: 'width: 170px'
        },
        legend: {
            orient: 'horizontal',
            align: 'left',
            bottom: 10,
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 10,
            textStyle: {
                color: xLabelColor,
                fontSize: 12
            }
        },
        grid: {
            left: '20',
            top: '25',
            right: '20',
            bottom: '40',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: xAxis_data,
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: xLabelColor,
                fontSize: 12,
                rotate: 0
            },
            axisLine: {
                lineStyle: {
                    color: xLineColor
                }
            }
        },
        yAxis: {
            type: 'value',
            //name: 'y',
            max: 70,
            axisTick: {
                show: false
            },
            axisLabel: {
                interval: 0,
                color: yLabelColor,
                fontSize: 12
            },
            axisLine: {
                lineStyle: {
                    color: yLineColor
                }
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: yLineColor,
                    type: 'dashed'
                }
            },
            axisPointer: {
                lineStyle: {
                    color: yLineColor
                }
            }
        },
        series
    };
}

/**
 * 环型饼图配置项
 * @param {boolean} Multi_column ---是环型饼图为true 否则饼图
 * @param {Object} series_data ---series--data数据
 * @param {String} series_name ---series--data名称
 * 
 */
export function Annular_cake(Multi_column, series_data, series_name) {
    let series = []
    if (Multi_column) {
        series = [
            {
                name: series_name,
                type: 'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: true,
                label: {
                    show: true,
                    alignTo: 'labelLine',
                    position: 'left'
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '20',
                        fontWeight: 'bold'
                    }
                },
                labelLine: {
                    show: true
                },
                data: series_data
            }
        ]
    } else {
        series = [
            {
                type: 'pie',
                radius: '65%',
                center: ['50%', '50%'],
                selectedMode: 'single',
                data: series_data,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    }
    return {
        backgroundColor: bgColor,
        tooltip: {
            trigger: 'item',
            backgroundColor: tooltipBgColor,
            borderWidth: 2,
            borderColor: tooltipBordeColor,
            showContent: true,
            padding: 10,
            textStyle: {
                color: tooltipColor
            },
            extraCssText: 'width: 170px'
        },

        legend: {
            orient: 'vertical',
            align: 'left',
            bottom: 10,
            right: 10,
            icon: 'roundRect',
            itemWidth: 14,
            itemHeight: 10,
            textStyle: {
                color: xLabelColor,
                fontSize: 12
            }
        },
        color: mColor,
        series
    }
}