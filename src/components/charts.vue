<template>
  <div  id="unfinshedWork" style="width: 100%;min-height: 500px;" v-loading="loading">
    <div
      :id="id"
      style="width: 100%;min-height: 500px;text-align: center;"
      ref="Echart"
      
    ></div>
  </div>
</template>
<script>
import echarts from "echarts";
import moment from "moment";
import {Columnar,broken_line,Annular_cake} from "./texteharts";
// import $ from 'jquery'
export default {
  data: function() {
    return {
      unfinshedWork: "",
      isOptionAbnormal: false,
      id: this.generatorOnlyId(),
      option: {}
    };
  },
  props: {
    list: { type: String, default: "medium" },
    loading: { type: Boolean, default: false },
  },
  
  methods: {
    generatorOnlyId() {
      return (
        moment().format("YYYYMMDDHHmmssSSS") + Math.floor(Math.random() * 10000)
      );
    },
    drawChart() {
      let myChart = echarts.init(document.getElementById(this.id));
      this.unfinshedWork = myChart;
      // let xAxis_data = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
      // let series_data = [{data:[2.6, 5.9, 9.0, 26.4, 28.7, 50.7, 25.6, 22.2, 48.7, 18.8, 6.0, 2.3],name:'已完成'},
      //                   {data: [2.0, 4.9, 7.0, 23.2, 25.6, 46.7, 35.6, 62.2, 32.6, 20.0, 6.4, 3.3],name: '总计',}]
       let Multi_column = true
      // console.log(Columnar(xAxis_data,series_data,Multi_column))
      let series_data =  [{ value: 1548, name: '康计' }, { value: 535, name: '付麻毕' }, { value: 510, name: '严苏' }, { value: 634, name: '鲍金腾' }, { value: 735, name: '孙和' }]
      let series_name = 'name'
      this.option = Annular_cake(Multi_column,series_data,series_name)
      myChart.setOption(this.option,true);
      this.$nextTick(() => {
        myChart.resize();
      });
     
    },
    
  },
  watch: {
    list: function(newVal, oldVal) {
       this.drawChart(); 
    },
    loading:(res)=>{
      console.log(res)
    },
    renovate: function(newVal) {
       this.drawChart();
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.unfinshedWork.resize();
      }, 0);
    },
  },
  mounted() {
    this.drawChart();
    this.resizeFun = () => {
      if (this.resizeTimer) clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        this.unfinshedWork.resize();
      }, 100);
    };
    window.addEventListener("resize", this.resizeFun);
  }
};
</script>
<style  lang='scss' scoped>
#unfinshedWork {
  width: 100%;
  height: 100%;
}
</style>

