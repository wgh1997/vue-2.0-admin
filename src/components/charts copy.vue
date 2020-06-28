<template>
  <div id="app">
    <div :id="id"
         style="width:100%; height:500px;"
         ref="Echart"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "App",
  data: function() {
    return {
      id: this.generatorOnlyId(),
      option: {
        title: {},
        tooltip: {},
        legend: {},
        toolbox: {},
        grid: {},
        xAxis: [],
        yAxis: [],
        series: []
      }
    };
  },
  props: [
    "title",
    "tooltip",
    "legend",
    "toolbox",
    "grid",
    "xAxis",
    "yAxis",
    "series",
    "activeName"
  ],
  methods: {
    generatorOnlyId() {
      return (
        this.$moment().format("YYYYMMDDHHmmssSSS") +
        Math.floor(Math.random() * 10000)
      );
    },
    drawChart() {
      let myChart = echarts.init(document.getElementById(this.id));
      if (this.title !== "undefind") {
        this.option.title = this.title;
      }
      if (this.tooltip !== "undefind") {
        this.option.tooltip = this.tooltip;
      }
      if (this.legend !== "undefind") {
        this.option.legend = this.legend;
      }
      if (this.toolbox !== "undefind") {
        this.option.toolbox = this.toolbox;
      }
      if (this.grid !== "undefind") {
        this.option.grid = this.grid;
      }
      if (this.xAxis !== "undefind") {
        this.option.xAxis = this.xAxis;
      }
      if (this.yAxis !== "undefind") {
        this.option.yAxis = this.yAxis;
      }
      if (this.series !== "undefind") {
        this.option.series = this.series;
      }
      this.$nextTick(() => {
        myChart.resize();
      });
      myChart.setOption(this.option);
    }
  },
  watch: {
    drawChart: function(newVal, oldVal) {},
    title: function(newVal, oldVal) {
      this.option.title = newVal;
    },
    tooltip: function(newVal, oldVal) {
      this.option.tooltip = newVal;
    },
    legend: function(newVal, oldVal) {
      this.option.legend = newVal;
    },
    toolbox: function(newVal, oldVal) {
      this.option.toolbox = newVal;
    },
    grid: function(newVal, oldVal) {
      this.option.grid = newVal;
    },
    xAxis: function(newVal, oldVal) {
      this.option.xAxis = newVal;
    },
    yAxis: function(newVal, oldVal) {
      this.option.yAxis = newVal;
    },
    series: function(newVal, oldVal) {
      this.option.series = newVal;
    },
    activeName: function(newVal, oldVal) {
      this.drawChart();
    }
  },
  mounted() {
    this.drawChart();
  }
};
</script>
<style>
.my-chart {
  width: 800px;
  height: 500px;
}
</style>
