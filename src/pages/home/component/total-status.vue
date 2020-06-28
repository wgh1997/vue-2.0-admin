<template>
  <div class="page">
    <el-button type="primary"
               v-has='a'
               value='value'>新增</el-button>
    <el-button type="primary"
               v-has="c">新增</el-button>
    <div>
      <organization-chart :datasource="ds"
                          :node-click="funct(ds)"></organization-chart>
    </div>
    <div>
      <svg width="1000"
           height="1500">
        <g />
        <rect />
      </svg>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from "vue";
import OrganizationChart from "vue-organization-chart";
import "vue-organization-chart/dist/orgchart.css";
import dagreD3 from "dagre-d3";
    import * as d3 from "d3";
export default {
  name: "page",
  components: { OrganizationChart },
  data() {
    return {
      a: "a",
      c: "c",
      ds: {
        id: "1",
        name: "Lao Lao",
        title: "general manager",
        children: [
          {
            id: "2",
            name: "Bo Miao",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "Hei Hei",
                title: "senior engineer"
              }
            ]
          },
          {
            id: "3",
            name: "Su Miao",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "Hei Hei",
                title: "senior engineer"
              }
            ]
          },
          {
            id: "8",
            name: "Hong Miao",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "Hei Hei",
                title: "senior engineer"
              }
            ]
          },
          {
            id: "9",
            name: "Chun Miao",
            title: "department manager",
            children: [
              { id: "4", name: "Tie Hua", title: "senior engineer" },
              {
                id: "5",
                name: "Hei Hei",
                title: "senior engineer"
              }
            ]
          }
        ]
      },
    };
  },
  props: {},
  watch: {},
  methods: {
    funct(text) {
      console.log(text);
    }
  },
  computed: {},
  created() {},
  mounted() {},
  destroyed() {}
};
</script>

<style scoped lang="scss">
</style>
