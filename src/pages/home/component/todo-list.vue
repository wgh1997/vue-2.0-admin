<template>
  <div>
    <svg width="100%"
         height="1500">
      <g />
      <rect />
    </svg>
  </div>
</template>
<script>
    import dagreD3 from "dagre-d3";
    import * as d3 from "d3";
    export default {
        data() {
            return {
                list: {
                    nodeInfos: [
                        {
                            id: "1",
                            label: '<p>2222</p>',
                        },
                        {
                            id: "2",
                            label: "发起人-编辑中",
                        },
                        {
                            id: "3",
                            label: "QA-审核中",
                        },
                        {
                            id: "4",
                            label: "分管-审核中",
                        },
                        {
                            id: "5",
                            label: "结束",
                        }
                    ],
                    edges: [
                        {
                            source: "1",
                            target: "2",
                            
                        },
                        {
                            source: "1",
                            target: "3",
                            label: "保存"
                        },{
                            source: "1",
                            target: "4",
                            label: "保存"
                        },
                        ,{
                            source: "2",
                            target: "5",
                            label: "保存"
                        },
                       
                       
                    ]
                }
            };
        },
        mounted() {
            //获取D3
            var g = new dagreD3.graphlib.Graph().setGraph({});
            console.log(g)
            // 添加节点
            this.list.nodeInfos.forEach((item, index) => {
                item.rx = item.ry = 5;//圆角
                g.setNode(item.id, item);
                // 节点颜色 fill指节点背景色，stroke指节点描边颜色
                g.node(item.id).style = 'fill:' + 'green' + ';stroke: green;'
            });
            // 链接关系
            this.list.edges.forEach(item => {
                g.setEdge(item.source, item.target, {
                    // 连线上的条件字
                    label: item.label,
                    // 连线的颜色
                    style: "stroke: #0fb2cc; fill: none;",
                    // 箭头颜色
                    arrowheadStyle: "fill: #0fb2cc;stroke: #0fb2cc;",
                    // 箭头形状（vee表示箭头是尖的，默认是平的）
                    arrowhead: 'vee',
                });
            });
            g.nodes().forEach(function (v) {
                console.log("Node " + v + ": " + JSON.stringify(g.node(v)));
            });
            g.edges().forEach(function (e) {
                console.log("Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)));
            });
            //绘制图形
            var svg = d3.select("svg"),
                inner = svg.select("g");
            //缩放
            var zoom = d3.zoom().on("zoom", function () {
                inner.attr("transform", d3.event.transform);
            });
            // svg.call(zoom);
            var render = new dagreD3.render();
            console.log(render, 'render')
            render(inner, g);
            console.log(inner, 'inner111')
            let code;
            inner.selectAll("g.node").on("click", e => {
                //点击事件
                code = this.list.nodeInfos.filter(item => {
                    return item.id == e;
                });
                console.log(code);
            })
            .on('mouseover', e => {
                let curNode = g.node(e)
                console.log(curNode, 'curNode')
            });
            // 初始化缩放比例
            var initialScale = 1;
            // 设置宽高
            svg.call(
                zoom.transform,
                d3.zoomIdentity
                    .translate(
                       20,
                        20
                    )
                    .scale(initialScale)
            );
            svg.attr("height", g.graph().height * initialScale + 40);
        }
    };
</script>

<style lang="scss">
    svg {
        font-size: 14px;
    }
    .node rect {
        stroke: #606266;
        fill: #fff;
    }
    .edgePath path {
        stroke: #606266;
        fill: #333;
        stroke-width: 1.5px;
    }
</style>