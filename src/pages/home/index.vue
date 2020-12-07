<template>
  <div class="page">
    <button @click="cles2">我是测试点击Loading</button>
    
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
import {cles,cles4} from '../../api/permission'
export default {
  name: "page",
  components: {},
  data() {
    return {
      
    };
  },
  props: {},
  watch: {},
  methods: {
    cles2(){
      cles4().then(res=>{
        console.log(res)
      })
    }
  },
  computed: {},
  created() {},
  mounted() {
    cles().then(res=>{
      console.log(res)
    })
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
