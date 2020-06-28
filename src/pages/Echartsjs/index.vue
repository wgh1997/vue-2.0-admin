<template>
  <div id="app">
    <el-tabs v-model="activeName"
             type="card">
      <el-tab-pane label="折线图"
                   name="first">
        <Echarts :title="title"
                 :tooltip="tooltip"
                 :legend="legend"
                 :grid="grid"
                 :xAxis="xAxis"
                 :yAxis="yAxis"
                 :series="series"
                 :activeName="activeName"></Echarts>

      </el-tab-pane>

      <el-tab-pane label="柱状图"
                   name="second">
        <Echarts :title="title1"
                 :tooltip="tooltip1"
                 :legend="legend1"
                 :grid="grid1"
                 :xAxis="xAxis1"
                 :yAxis="yAxis1"
                 :series="series1"
                 :activeName="activeName"></Echarts>
      </el-tab-pane>
      <el-tab-pane label="关系图"
                   name="third">
        <Echarts :title='title2'
                 :grid="grid2"
                 :series="series2"
                 :activeName="activeName"></Echarts>
      </el-tab-pane>
      <el-tab-pane label="饼图"
                   name="fourth">
        <Echarts :title="title3"
                 :tooltip="tooltip3"
                 :legend="legend3"
                 :grid="grid3"
                 :series="series3"
                 :activeName="activeName"></Echarts>
      </el-tab-pane>
    </el-tabs>

  </div>
</template>
<script>
import Echarts from "@/components/charts";
import echarts from "echarts";
export default {
  name: "App",
  data: function () {
    return {
      activeName: 'first',
      title: {
        text: "折线图"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            color: '#57617B'
          }
        }
      },
      legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['移动', '电信', '联通'],
        right: '4%',
        textStyle: {
          fontSize: 12,
          color: '#000'
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        data: ['13:00', '13:05', '13:10', '13:15', '13:20', '13:25', '13:30', '13:35', '13:40', '13:45', '13:50', '13:55']
      }, {
        axisPointer: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisTick: {
          show: false
        },
      }],
      yAxis: [{
        type: 'value',
        name: '单位（%）',
        axisTick: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: '#57617B'
          }
        },
        axisLabel: {
          margin: 10,
          textStyle: {
            fontSize: 14
          }
        },
        splitLine: {
          lineStyle: {
            color: '#57617B'
          }
        }
      }],
      series: [{
        name: '移动',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(137, 189, 27, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(137, 189, 27, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(137,189,27)',
            borderColor: 'rgba(137,189,2,0.27)',
            borderWidth: 12

          }
        },
        data: [220, 182, 191, 134, 150, 120, 110, 125, 145, 122, 165, 122]
      }, {
        name: '电信',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(0, 136, 212, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(0, 136, 212, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {
            color: 'rgb(0,136,212)',
            borderColor: 'rgba(0,136,212,0.2)',
            borderWidth: 12

          }
        },
        data: [120, 110, 125, 145, 122, 165, 122, 220, 182, 191, 134, 150]
      }, {
        name: '联通',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        showSymbol: false,
        lineStyle: {
          normal: {
            width: 1
          }
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(219, 50, 51, 0.3)'
            }, {
              offset: 0.8,
              color: 'rgba(219, 50, 51, 0)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
            shadowBlur: 10
          }
        },
        itemStyle: {
          normal: {

            color: 'rgb(219,50,51)',
            borderColor: 'rgba(219,50,51,0.2)',
            borderWidth: 12
          }
        },
        data: [220, 182, 125, 145, 122, 191, 134, 150, 120, 110, 165, 122]
      },],






      title1: {
        text: "折线图"
      },
      tooltip1: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
      },
      toolbox1: {
        feature: {
          dataView: { show: true, readOnly: false },
          //magicType: {show: true, type: ['stack', 'tiled']},
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend1: {
        data: ['检查企业数', '完成整改企业数', '违法违规企业数']
      },
      grid1: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis1: [{
        type: 'category',
        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      }],
      yAxis1: [{
        type: 'value',
        //name: '投诉举报数',
        axisLabel: {
          formatter: '{value}'
        }
      }],
      series1: [{
        name: '检查企业数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#01949B' },
        },
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        },
        data: [2031, 1793, 3640, 2593, 4377, 3201, 2275, 3289, 3356, 2859, 4244, 3945]
      }, {
        name: '完成整改企业数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#EBA954' },
        },
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        },
        data: [1043, 1456, 1900, 1200, 2100, 1870, 980, 1569, 1130, 1490, 2300, 2210]
      }, {
        name: '违法违规企业数',
        type: 'bar',
        itemStyle: {
          normal: { color: '#C23531' },
        },
        markPoint: {
          data: [
            { type: 'max', name: '最大值' },
            { type: 'min', name: '最小值' }
          ]
        },
        markLine: {
          data: [
            { type: 'average', name: '平均值' }
          ]
        },
        data: [787, 571, 999, 341, 231, 812, 735, 231, 322, 712, 1230, 870]
      }],







      grid2: {
        x: 0,
        x2: 0,
        y: 0,
        y2: 0
      },

      title2: {
        text: "",
        subtext: "",
        textStyle: {
          color: "#fff",
          fontSize: 18
        },
        top: "top",
        left: "center"
      },
      toolbox2: {
        show: false,
        feature: {
          dataView: {
            show: true,
            readOnly: true
          },
          restore: {
            show: true
          },
          saveAsImage: {
            show: true
          }
        }
      },
      series2: [{
        name: '市容管理主题视图',
        type: 'graph',
        layout: 'force',

        force: {
          // initLayout: 'circular',
          repulsion: 160,
          gravity: 0.2,
          edgeLength: 90
        },

        data: [{
          "name": "市容管理主题",
          // "x": 0,
          // y: 0,
          "symbolSize": 24,
          "draggable": "true",
          "value": 1

        }, {
          "name": "组织能力指标",
          "symbolSize": 10,
          "category": "类目",
          "draggable": "true",
          "value": 1
        }, {
          "name": "地区工作能力情况",
          "symbolSize": 8,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "工作人员数量",
          "symbolSize": 6,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "指挥中心城管工作人数",
          "symbolSize": 4,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "二级平台城管工作人数",
          "symbolSize": 4,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位数量",
          "symbolSize": 6,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "区级责任单位数量",
          "symbolSize": 4,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "区属责任单位数量",
          "symbolSize": 4,
          "category": "地区工作能力情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "地区网格分布情况",
          "symbolSize": 8,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "万米网格数量",
          "symbolSize": 6,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "南市街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "繁华地区网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "新兴街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "小白楼街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "体育馆街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "劝业场街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "南营门街道网格数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "城区部件数量",
          "symbolSize": 6,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "公共设施类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "市容环境类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "园林绿化类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "房屋土地类类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "道路交通类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "其他设施类部件数量",
          "symbolSize": 4,
          "category": "地区网格分布情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "业务能力指标",
          "symbolSize": 10,
          "category": "类目",
          "draggable": "true",
          "value": 1
        }, {
          "name": "日常工作动态情况",
          "symbolSize": 8,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "业务事件环比增长",
          "symbolSize": 6,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "业务事件总数量",
          "symbolSize": 4,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "常发事件环比增长",
          "symbolSize": 6,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "常发事件类别情况",
          "symbolSize": 4,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "偶发事件环比增长",
          "symbolSize": 6,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "偶发事件类别情况",
          "symbolSize": 4,
          "category": "日常工作动态情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "上报事件来源情况",
          "symbolSize": 8,
          "category": "上报事件来源情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "主要来源环比增长",
          "symbolSize": 6,
          "category": "上报事件来源情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "主要来源类别情况",
          "symbolSize": 4,
          "category": "上报事件来源情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "次要来源环比增长",
          "symbolSize": 6,
          "category": "上报事件来源情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "次要来源类别情况",
          "symbolSize": 4,
          "category": "上报事件来源情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件部件关联情况",
          "symbolSize": 8,
          "category": "事件部件关联情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "关联部件事件数量环比增长",
          "symbolSize": 6,
          "category": "事件部件关联情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "关联部件事件类别情况",
          "symbolSize": 4,
          "category": "事件部件关联情况",
          "draggable": "true",
          "value": 1
        }, {
          "name": "工作态势指标",
          "symbolSize": 10,
          "category": "类目",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件流转态势",
          "symbolSize": 8,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "上报中事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "上报中事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "受理中事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "受理中事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "立案派遣中事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "立案派遣中事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "处理中事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "处理中事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "核查中事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "核查中事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "已结案事件占比",
          "symbolSize": 6,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "已结案事件数量",
          "symbolSize": 4,
          "category": "事件流转态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件故障态势",
          "symbolSize": 8,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件损坏类事件占比",
          "symbolSize": 6,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件损坏类事件数量",
          "symbolSize": 4,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件丢失类事件占比",
          "symbolSize": 6,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件丢失类事件数量",
          "symbolSize": 4,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件被圈占类事件占比",
          "symbolSize": 6,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "部件被圈占类事件数量",
          "symbolSize": 4,
          "category": "部件故障态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "人员工作态势",
          "symbolSize": 8,
          "category": "人员工作态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "在岗人员占比",
          "symbolSize": 6,
          "category": "人员工作态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "在岗人员数",
          "symbolSize": 4,
          "category": "人员工作态势",
          "draggable": "true",
          "value": 1
        }, {
          "name": "效能考核指标",
          "symbolSize": 10,
          "category": "类目",
          "draggable": "true",
          "value": 1
        }, {
          "name": "总体工作效能评价",
          "symbolSize": 8,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件立案数环比增长",
          "symbolSize": 6,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件立案数",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件立案率",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件结案率环比增长",
          "symbolSize": 6,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件结案数",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件结案率",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件按期结案率环比增长",
          "symbolSize": 6,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件按期结案数",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "事件按期结案率",
          "symbolSize": 4,
          "category": "总体工作效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "监督员工作能力评价",
          "symbolSize": 8,
          "category": "监督员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "监督员上报数量环比增长",
          "symbolSize": 6,
          "category": "监督员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "监督员上报数",
          "symbolSize": 4,
          "category": "监督员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "监督员上报准确率环比增长",
          "symbolSize": 6,
          "category": "监督员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "监督员有效上报数",
          "symbolSize": 4,
          "category": "监督员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "巡检员工作能力评价",
          "symbolSize": 8,
          "category": "巡检员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "巡检员上报数量环比增长",
          "symbolSize": 6,
          "category": "巡检员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "巡检员上报数",
          "symbolSize": 4,
          "category": "巡检员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "巡检员上报准确率环比增长",
          "symbolSize": 6,
          "category": "巡检员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "巡检员有效上报数",
          "symbolSize": 4,
          "category": "巡检员工作能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "值班室任务量评价",
          "symbolSize": 8,
          "category": "值班室任务量评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "值班室任务量环比增长",
          "symbolSize": 6,
          "category": "值班室任务量评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "值班室工作任务类别",
          "symbolSize": 4,
          "category": "值班室任务量评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道核查能力评价",
          "symbolSize": 8,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道事件核查数环比增长",
          "symbolSize": 6,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道应核查数",
          "symbolSize": 4,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道事件核查率环比增长",
          "symbolSize": 6,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道核查数",
          "symbolSize": 4,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道事件按期核查率环比增长",
          "symbolSize": 6,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "街道超期核查数",
          "symbolSize": 4,
          "category": "街道核查能力评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "万米网格管理效能评价",
          "symbolSize": 8,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "A类等级网格数量环比增长",
          "symbolSize": 6,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "A类等级网格数量",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "A类等级立案分数均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "A类等级综合指标均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "B类等级网格数量环比增长",
          "symbolSize": 6,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "B类等级网格数量",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "B类等级立案分数均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "B类等级综合指标均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "C类等级网格数量环比增长",
          "symbolSize": 6,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "C类等级网格数量",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "C类等级立案分数均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "C类等级综合指标均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "D类等级网格数量环比增长",
          "symbolSize": 6,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "D类等级网格数量",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "D类等级立案分数均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "D类等级综合指标均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "E类等级网格数量环比增长",
          "symbolSize": 6,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "E类等级网格数量",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "E类等级立案分数均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "E类等级综合指标均值",
          "symbolSize": 4,
          "category": "万米网格管理效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位效能评价",
          "symbolSize": 8,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位事件应处置数环比增长",
          "symbolSize": 6,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位应处置数",
          "symbolSize": 4,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位事件处置率环比增长",
          "symbolSize": 6,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位处置数",
          "symbolSize": 4,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位事件按期处置率环比增长",
          "symbolSize": 6,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }, {
          "name": "责任单位按期处置数",
          "symbolSize": 4,
          "category": "责任单位效能评价",
          "draggable": "true",
          "value": 1
        }],
        links: [{
          "source": "市容管理主题",
          "target": "组织能力指标"
        }, {
          "source": "组织能力指标",
          "target": "地区工作能力情况"
        }, {
          "source": "地区工作能力情况",
          "target": "工作人员数量"
        }, {
          "source": "工作人员数量",
          "target": "指挥中心城管工作人数"
        }, {
          "source": "工作人员数量",
          "target": "二级平台城管工作人数"
        }, {
          "source": "地区工作能力情况",
          "target": "责任单位数量"
        }, {
          "source": "责任单位数量",
          "target": "区级责任单位数量"
        }, {
          "source": "责任单位数量",
          "target": "区属责任单位数量"
        }, {
          "source": "组织能力指标",
          "target": "地区网格分布情况"
        }, {
          "source": "地区部件分布情况",
          "target": "万米网格数量"
        }, {
          "source": "万米网格数量",
          "target": "南市街道网格数量"
        }, {
          "source": "万米网格数量",
          "target": "繁华地区网格数量"
        }, {
          "source": "万米网格数量",
          "target": "新兴街道网格数量"
        }, {
          "source": "万米网格数量",
          "target": "小白楼街道网格数量"
        }, {
          "source": "万米网格数量",
          "target": "体育馆街道网格数量"
        }, {
          "source": "万米网格数量",
          "target": "劝业场街道网格数量"
        }, {
          "source": "万米网格数量",
          "target": "南营门街道网格数量"
        }, {
          "source": "地区部件分布情况",
          "target": "城区部件数量"
        }, {
          "source": "城区部件数量",
          "target": "公共设施类部件数量"
        }, {
          "source": "城区部件数量",
          "target": "市容环境类部件数量"
        }, {
          "source": "城区部件数量",
          "target": "园林绿化类部件数量"
        }, {
          "source": "城区部件数量",
          "target": "房屋土地类类部件数量"
        }, {
          "source": "城区部件数量",
          "target": "道路交通类部件数量"
        }, {
          "source": "城区部件数量",
          "target": "其他设施类部件数量"
        }, {
          "source": "市容管理主题",
          "target": "业务能力指标"
        }, {
          "source": "业务能力指标",
          "target": "日常工作动态情况"
        }, {
          "source": "日常工作动态情况",
          "target": "业务事件环比增长"
        }, {
          "source": "业务事件环比增长",
          "target": "业务事件总数量"
        }, {
          "source": "日常工作动态情况",
          "target": "常发事件环比增长"
        }, {
          "source": "常发事件环比增长",
          "target": "常发事件类别情况"
        }, {
          "source": "日常工作动态情况",
          "target": "偶发事件环比增长"
        }, {
          "source": "偶发事件环比增长",
          "target": "偶发事件类别情况"
        }, {
          "source": "业务能力指标",
          "target": "上报事件来源情况"
        }, {
          "source": "上报事件来源情况",
          "target": "主要来源环比增长"
        }, {
          "source": "主要来源环比增长",
          "target": "主要来源类别情况"
        }, {
          "source": "上报事件来源情况",
          "target": "次要来源环比增长"
        }, {
          "source": "次要来源环比增长",
          "target": "次要来源类别情况"
        }, {
          "source": "业务能力指标",
          "target": "事件部件关联情况"
        }, {
          "source": "事件部件关联情况",
          "target": "关联部件事件数量环比增长"
        }, {
          "source": "关联部件事件数量环比增长",
          "target": "关联部件事件类别情况"
        }, {
          "source": "市容管理主题",
          "target": "工作态势指标"
        }, {
          "source": "工作态势指标",
          "target": "事件流转态势"
        }, {
          "source": "事件流转态势",
          "target": "上报中事件占比"
        }, {
          "source": "上报中事件占比",
          "target": "上报中事件数量"
        }, {
          "source": "事件流转态势",
          "target": "受理中事件占比"
        }, {
          "source": "受理中事件占比",
          "target": "受理中事件数量"
        }, {
          "source": "事件流转态势",
          "target": "立案派遣中事件占比"
        }, {
          "source": "立案派遣中事件占比",
          "target": "立案派遣中事件数量"
        }, {
          "source": "事件流转态势",
          "target": "处理中事件占比"
        }, {
          "source": "处理中事件占比",
          "target": "处理中事件数量"
        }, {
          "source": "事件流转态势",
          "target": "核查中事件占比"
        }, {
          "source": "核查中事件占比",
          "target": "核查中事件数量"
        }, {
          "source": "事件流转态势",
          "target": "已结案事件占比"
        }, {
          "source": "已结案事件占比",
          "target": "已结案事件数量"
        }, {
          "source": "工作态势指标",
          "target": "部件故障态势"
        }, {
          "source": "部件故障态势",
          "target": "部件损坏类事件占比"
        }, {
          "source": "部件损坏类事件占比",
          "target": "部件损坏类事件数量"
        }, {
          "source": "部件故障态势",
          "target": "部件丢失类事件占比"
        }, {
          "source": "部件丢失类事件占比",
          "target": "部件丢失类事件数量"
        }, {
          "source": "部件故障态势",
          "target": "部件被圈占类事件占比"
        }, {
          "source": "部件被圈占类事件占比",
          "target": "部件被圈占类事件数量"
        }, {
          "source": "工作态势指标",
          "target": "人员工作态势"
        }, {
          "source": "工作人员在岗态势",
          "target": "在岗人员占比"
        }, {
          "source": "在岗人员占比",
          "target": "在岗人员数"
        }, {
          "source": "市容管理主题",
          "target": "效能考核指标"
        }, {
          "source": "效能考核指标",
          "target": "总体工作效能评价"
        }, {
          "source": "总体工作效能评价",
          "target": "事件立案数环比增长"
        }, {
          "source": "事件立案数环比增长",
          "target": "事件立案数"
        }, {
          "source": "事件立案数环比增长",
          "target": "事件立案率"
        }, {
          "source": "总体工作效能评价",
          "target": "事件结案率环比增长"
        }, {
          "source": "事件结案率环比增长",
          "target": "事件结案数"
        }, {
          "source": "事件结案率环比增长",
          "target": "事件结案率"
        }, {
          "source": "总体工作效能评价",
          "target": "事件按期结案率环比增长"
        }, {
          "source": "事件按期结案率环比增长",
          "target": "事件按期结案数"
        }, {
          "source": "事件按期结案率环比增长",
          "target": "事件按期结案率"
        }, {
          "source": "效能考核指标",
          "target": "监督员工作能力评价"
        }, {
          "source": "监督员工作能力评价",
          "target": "监督员上报数量环比增长"
        }, {
          "source": "监督员上报数量环比增长",
          "target": "监督员上报数"
        }, {
          "source": "监督员工作能力评价",
          "target": "监督员上报准确率环比增长"
        }, {
          "source": "监督员上报准确率环比增长",
          "target": "监督员有效上报数"
        }, {
          "source": "效能考核指标",
          "target": "巡检员工作能力评价"
        }, {
          "source": "巡检员工作能力评价",
          "target": "巡检员上报数量环比增长"
        }, {
          "source": "巡检员上报数量环比增长",
          "target": "巡检员上报数"
        }, {
          "source": "巡检员工作能力评价",
          "target": "巡检员上报准确率环比增长"
        }, {
          "source": "巡检员上报准确率环比增长",
          "target": "巡检员有效上报数"
        }, {
          "source": "效能考核指标",
          "target": "值班室任务量评价"
        }, {
          "source": "值班室任务量评价",
          "target": "值班室任务量环比增长"
        }, {
          "source": "值班室任务量环比增长",
          "target": "值班室工作任务类别"
        }, {
          "source": "效能考核指标",
          "target": "街道核查能力评价"
        }, {
          "source": "街道核查能力评价",
          "target": "街道事件核查数环比增长"
        }, {
          "source": "街道事件核查数环比增长",
          "target": "街道应核查数"
        }, {
          "source": "街道核查能力评价",
          "target": "街道事件核查率环比增长"
        }, {
          "source": "街道事件核查率环比增长",
          "target": "街道核查数"
        }, {
          "source": "街道核查能力评价",
          "target": "街道事件按期核查率环比增长"
        }, {
          "source": "街道事件按期核查率环比增长",
          "target": "街道超期核查数"
        }, {
          "source": "效能考核指标",
          "target": "万米网格管理效能评价"
        }, {
          "source": "万米网格管理效能评价",
          "target": "A类等级网格数量环比增长"
        }, {
          "source": "A类等级网格数量环比增长",
          "target": "A类等级网格数量"
        }, {
          "source": "A类等级网格数量环比增长",
          "target": "A类等级立案分数均值"
        }, {
          "source": "A类等级网格数量环比增长",
          "target": "A类等级综合指标均值"
        }, {
          "source": "万米网格管理效能评价",
          "target": "B类等级网格数量环比增长"
        }, {
          "source": "B类等级网格数量环比增长",
          "target": "B类等级网格数量"
        }, {
          "source": "B类等级网格数量环比增长",
          "target": "B类等级立案分数均值"
        }, {
          "source": "B类等级网格数量环比增长",
          "target": "B类等级综合指标均值"
        }, {
          "source": "万米网格管理效能评价",
          "target": "C类等级网格数量环比增长"
        }, {
          "source": "C类等级网格数量环比增长",
          "target": "C类等级网格数量"
        }, {
          "source": "C类等级网格数量环比增长",
          "target": "C类等级立案分数均值"
        }, {
          "source": "C类等级网格数量环比增长",
          "target": "C类等级综合指标均值"
        }, {
          "source": "万米网格管理效能评价",
          "target": "D类等级网格数量环比增长"
        }, {
          "source": "D类等级网格数量环比增长",
          "target": "D类等级网格数量"
        }, {
          "source": "D类等级网格数量环比增长",
          "target": "D类等级立案分数均值"
        }, {
          "source": "D类等级网格数量环比增长",
          "target": "D类等级综合指标均值"
        }, {
          "source": "万米网格管理效能评价",
          "target": "E类等级网格数量环比增长"
        }, {
          "source": "E类等级网格数量环比增长",
          "target": "E类等级网格数量"
        }, {
          "source": "E类等级网格数量环比增长",
          "target": "E类等级立案分数均值"
        }, {
          "source": "E类等级网格数量环比增长",
          "target": "E类等级综合指标均值"
        }, {
          "source": "效能考核指标",
          "target": "责任单位效能评价"
        }, {
          "source": "责任单位效能评价",
          "target": "责任单位事件应处置数环比增长"
        }, {
          "source": "责任单位事件应处置数环比增长",
          "target": "责任单位应处置数"
        }, {
          "source": "责任单位效能评价",
          "target": "责任单位事件处置率环比增长"
        }, {
          "source": "责任单位事件处置率环比增长",
          "target": "责任单位处置数"
        }, {
          "source": "责任单位效能评价",
          "target": "责任单位事件按期处置率环比增长"
        }, {
          "source": "责任单位事件按期处置率环比增长",
          "target": "责任单位按期处置数"
        }],
        categories: [{
          "name": "类目"
        }, {
          "name": "地区工作能力情况"
        }, {
          "name": "地区网格分布情况"
        }, {
          "name": "日常工作动态情况"
        }, {
          "name": "上报事件来源情况"
        }, {
          "name": "事件部件关联情况"
        }, {
          "name": "事件流转态势"
        }, {
          "name": "部件故障态势"
        }, {
          "name": "人员工作态势"
        }, {
          "name": "总体工作效能评价"
        }, {
          "name": "监督员工作能力评价"
        }, {
          "name": "巡检员工作能力评价"
        }, {
          "name": "值班室任务量评价"
        }, {
          "name": "街道核查能力评价"
        }, {
          "name": "万米网格管理效能评价"
        }, {
          "name": "责任单位效能评价"
        }],
        focusNodeAdjacency: true,
        roam: true,
        label: {
          normal: {

            show: true,
            position: 'top',
            textStyle: {
              fontSize: 14
            }

          }
        },



        lineStyle: {
          normal: {
            color: 'source',
            curveness: 0
            // type: "solid"
          }
        }
      }],





      title3: {
        text: '南丁格尔玫瑰图',
        subtext: '纯属虚构',
        x: 'center'
      },
      tooltip3: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend3: {
        x: 'center',
        y: 'bottom',
        data: ['rose1', 'rose2', 'rose3', 'rose4', 'rose5', 'rose6', 'rose7', 'rose8']
      },
      toolbox3: {
        show: true,
        feature: {
          mark: { show: true },
          dataView: { show: true, readOnly: false },
          magicType: {
            show: true,
            type: ['pie', 'funnel']
          },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      series3: [
        {
          name: '半径模式',
          type: 'pie',
          radius: [20, 110],
          center: ['25%', '50%'],
          roseType: 'radius',
          label: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          lableLine: {
            normal: {
              show: false
            },
            emphasis: {
              show: true
            }
          },
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        },
        {
          name: '面积模式',
          type: 'pie',
          radius: [30, 110],
          center: ['75%', '50%'],
          roseType: 'area',
          data: [
            { value: 10, name: 'rose1' },
            { value: 5, name: 'rose2' },
            { value: 15, name: 'rose3' },
            { value: 25, name: 'rose4' },
            { value: 20, name: 'rose5' },
            { value: 35, name: 'rose6' },
            { value: 30, name: 'rose7' },
            { value: 40, name: 'rose8' }
          ]
        }
      ]
    }
  },
  components: {
    Echarts,
  }

}
</script>
<style>
.my-chart {
  width: 800px;
  height: 500px;
}
</style>
