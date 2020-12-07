<template>
  <div id="app">
    <el-tabs v-model="activeName"
             type="card">
      <el-tab-pane label="1"
                   name="1">
        <Echarts :list="activeName" :loading="loading1"></Echarts>
          <!-- <Echarts :list="2" ></Echarts> -->
      </el-tab-pane>
      <el-tab-pane label="2"
                   name="2">
        <Echarts :list="activeName" :loading="loading2"></Echarts>
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
   return{
     activeName:'1',
     loading1:true,
     loading2:true
   }
  },
  components: {
    Echarts,
  },
  mounted () {
    let _this = this
    window.setTimeout(function (){
        _this.loading1 = false
    },3000);
    window.setTimeout(function (){
        _this.loading2 = false
    },4000);
  },

}
</script>
<style>
.my-chart {
  width: 800px;
  height: 500px;
}
</style>
