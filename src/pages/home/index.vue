<template>
  <div class="page">
    <div id="gitgraph"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import {
  createGitgraph,
  templateExtend,
  TemplateName,
  Mode,
  GitgraphJS
} from "@gitgraph/js";
export default {
  name: "page",
  components: {},
  data() {
    return {
      list: {
        commits: [
          {
            parents: [["31731658238b87ad7afdb13a6e9e963f99e3ca58", 1]],
            author: {
              name: "yangbin6",
              email: "yangbin6@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/3745cef625da6e765b01d97c6e8d78e9?s=40\u0026d=identicon"
            },
            time: 0,
            space: 0,
            refs: "dev",
            id: "77fa70229cc2dc5b77ccaa556acb912e360c6a62",
            date: "2020-06-18T09:31:20.000+08:00",
            message: "Update pom.xml"
          },
          {
            parents: [["d05e7a2ca11c1783a6411e613960dd2f485cd563", 1]],
            author: {
              name: "yangbin6",
              email: "yangbin6@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/3745cef625da6e765b01d97c6e8d78e9?s=40\u0026d=identicon"
            },
            time: 1,
            space: 0,
            refs: "",
            id: "31731658238b87ad7afdb13a6e9e963f99e3ca58",
            date: "2020-06-17T21:37:55.000+08:00",
            message: "Update pom.xml"
          },
          {
            parents: [["663e825c635804ee9c173c3731dbc9c72f3b98c4", 1]],
            author: {
              name: "yangbin6",
              email: "yangbin6@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/3745cef625da6e765b01d97c6e8d78e9?s=40\u0026d=identicon"
            },
            time: 2,
            space: 0,
            refs: "",
            id: "d05e7a2ca11c1783a6411e613960dd2f485cd563",
            date: "2020-06-17T20:17:49.000+08:00",
            message: "Update pom.xml"
          },
          {
            parents: [["ee6bf929b6d68c55554ce0a831f8ac1e65f9c28b", 3]],
            author: {
              name: "程涛",
              email: "chengtao@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/1b6768ceaa56a6fab66e29c6883b7d98?s=40\u0026d=identicon"
            },
            time: 3,
            space: 1,
            refs: "Feature_7776",
            id: "6ebc03f52af3569ba9cde9215a5d8abae1a21380",
            date: "2020-06-17T20:17:26.000+08:00",
            message: "fix #7885 工单回退-联调测试,修改部分问题\n"
          },

          {
            parents: [["66783053cce1f7d0be6bd6133b0f86ba617a51ca", 5]],
            author: {
              name: "Administrator",
              email: "admin@example.com",
              icon:
                "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
            },
            time: 5,
            space: 1,
            refs: "",
            id: "9d36cc528a6c85849d38191b2747c532ed0395b7",
            date: "2020-06-17T18:56:40.000+08:00",
            message: "提交dockerfile文件"
          },
          {
            parents: [["7e926371c070d7470df986dedaa0a46b52519ce0", 5]],
            author: {
              name: "Administrator",
              email: "admin@example.com",
              icon:
                "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
            },
            time: 6,
            space: 1,
            refs: "",
            id: "66783053cce1f7d0be6bd6133b0f86ba617a51ca",
            date: "2020-06-17T18:07:47.000+08:00",
            message: "提交dockerfile文件"
          },
          {
            parents: [["a4ce6137dd4bf23840deac4cb7587ac810a316ce", 5]],
            author: {
              name: "Administrator",
              email: "admin@example.com",
              icon:
                "http://www.gravatar.com/avatar/e64c7d89f26bd1972efa854d13d7dd61?s=40\u0026d=identicon"
            },
            time: 7,
            space: 1,
            refs: "",
            id: "7e926371c070d7470df986dedaa0a46b52519ce0",
            date: "2020-06-17T18:07:46.000+08:00",
            message: "提交dockerfile文件"
          },

          {
            parents: [["7226d2ab0ff0813f785e376108682e37377006bc", 7]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 10,
            space: 2,
            refs: "Feature_7777",
            id: "11ad4428fed182045063f30dc0d77cf4726f6821",
            date: "2020-06-17T11:02:51.000+08:00",
            message: "fix #7911 新建工单前端接口联调等"
          },
          {
            parents: [["f2a5974ee07b3ea6b41940e357c0c1aec25446b9", 7]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 11,
            space: 2,
            refs: "",
            id: "7226d2ab0ff0813f785e376108682e37377006bc",
            date: "2020-06-17T11:02:38.000+08:00",
            message: "fix #7911 新建工单前端页面实现"
          },
          {
            parents: [["758380136f4b821b7e4cf7467cf70070ad74419a", 7]],
            author: {
              name: "王国慧",
              email: "wangguohui1@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/73d8f5565448600536516e977a766522?s=40\u0026d=identicon"
            },
            time: 12,
            space: 2,
            refs: "",
            id: "f2a5974ee07b3ea6b41940e357c0c1aec25446b9",
            date: "2020-06-17T10:59:05.000+08:00",
            message: "fix #7903 工单处理前端接口联调"
          },

          {
            parents: [["758380136f4b821b7e4cf7467cf70070ad74419a", 7]],
            author: {
              name: "王国慧",
              email: "wangguohui1@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/73d8f5565448600536516e977a766522?s=40\u0026d=identicon"
            },
            time: 12,
            space: 3,
            refs: "aaaa",
            id: "f2a5974ee07b3ea6b41940e357c0c1aec25446b9",
            date: "2020-06-17T10:59:05.000+08:00",
            message: "fix #7903 工单处理前端接口联调"
          },
          {
            parents: [["4135dd5166ae333eec7837ee4cf804d2094eeacf", 3]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 17,
            space: 3,
            refs: "",
            id: "6f85d200529e842c4e1164f79471b2c56db24316",
            date: "2020-06-17T10:49:44.000+08:00",
            message: "fix #7853 工单处理前端静态页面开发等"
          },
          {
            parents: [["447f6d4a5635e35a3acceb74a3b8a0bfccdbdeff", 3]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 18,
            space: 3,
            refs: "",
            id: "4135dd5166ae333eec7837ee4cf804d2094eeacf",
            date: "2020-06-17T10:44:58.000+08:00",
            message: "fix #7784 工单处理前端静态页面开发"
          },
          {
            parents: [["447f6d4a5635e35a3acceb74a3b8a0bfccdbdeff", 3]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 18,
            space: 0,
            refs: "",
            id: "4135dd5166ae333eec7837ee4cf804d2094eeacf",
            date: "2020-06-17T10:44:58.000+08:00",
            message: "fix #7784 工单处理前端静态页面开发"
          },
          {
            parents: [["447f6d4a5635e35a3acceb74a3b8a0bfccdbdeff", 3]],
            author: {
              name: "王杰",
              email: "wangjie3@ultrapower.com.cn",
              icon:
                "http://www.gravatar.com/avatar/d7076ad7510f6b854a7f311999943de5?s=40\u0026d=identicon"
            },
            time: 18,
            space: 1,
            refs: "",
            id: "4135dd5166ae333eec7837ee4cf804d2094eeacf",
            date: "2020-06-17T10:44:58.000+08:00",
            message: "fix #7784 工单处理前端静态页面开发"
          }
        ]
      }
    };
  },
  props: {},
  watch: {},
  methods: {},
  computed: {},
  created() {},
  mounted() {
    const graphContainer = document.getElementById("gitgraph");
    const gitgraph = createGitgraph(graphContainer, {
      /*options*/
      // mode: Mode.Compact, // compact 模式，在 tooltip 顯示提交信息
      template: templateExtend(TemplateName.Metro, {
        commit: {
          message: {
            displayAuthor: false
          }
        }
      })
    });
    // Simulate git commands with Gitgraph API.
    // const master = gitgraph.branch("master");
    // master.commit("Initial commit");
    // const develop = gitgraph.branch("develop");
    // develop.commit("Add TypeScript");
    // const aFeature = gitgraph.branch("a-feature");
    // aFeature
    //   .commit("Make it work")
    //   .commit({ subject: "Make it right", hash: "test" })
    //   .commit("Make it fast");
    // develop.merge(aFeature);
    // develop.commit("Prepare v1");
    // master.merge(develop).tag("v1.0.0");
    let git = [];
    let github_list = {};
    var obj = [];
    this.list.commits.forEach((element, index) => {
      git.push({
        name: element.refs,
        space: element.space
      });
      let arr = git.reduce(function(item, next) {
        obj[next.space] ? "" : (obj[next.space] = true && item.push(next));
        return item;
      }, []);
      github_list[element.refs] = gitgraph.branch({
        name: element.refs
      });
      github_list[element.refs].commit({
        subject: element.message
      });
      console.log();
    });
  },
  destroyed() {}
};
</script>

<style scoped lang="scss">
</style>
