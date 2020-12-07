<template>
  <div class="components-container board">
    <Kanban :key="1"
            :list="list1"
            :group="group"
            class="kanban todo"
            header-text="Todo" />
    <Kanban :key="2"
            :list="list2"
            :group="group"
            class="kanban working"
            header-text="Working" />
    <Kanban :key="3"
            :list="list3"
            :group="group"
            class="kanban done"
            header-text="Done" />

  </div>

</template>
<script>
import Kanban from "@/components/Kanban";

export default {
  name: "DragKanbanDemo",
  components: {
    Kanban
  },
  data() {
    return {
      group: "mission",
      answer: "",
      list1: [
        { name: "Mission", id: 1 },
        { name: "Mission", id: 2 },
        { name: "Mission", id: 3 },
        { name: "Mission", id: 4 }
      ],
      list2: [
        { name: "Mission", id: 5 },
        { name: "Mission", id: 6 },
        { name: "Mission", id: 7 }
      ],
      list3: [
        { name: "Mission", id: 8 },
        { name: "Mission", id: 9 },
        { name: "Mission", id: 10 }
      ]
    };
  },
  methods: {
    getAnswer: _.debounce(
      function() {
        var vm = this;

        console.log(555555);
        // axios
        //   .get("https://yesno.wtf/api")
        //   .then(function(response) {
        //     vm.answer = _.capitalize(response.data.answer);
        //   })
        //   .catch(function(error) {
        //     vm.answer = "Error! Could not reach the API. " + error;
        //   });
      },
      // 这是我们为用户停止输入等待的毫秒数
      500
    )
  },
  watch: {
    list1: function(val) {
      // `this` points to the vm instance
      console.log(2222, val);
      this.getAnswer();
    }
  }
};
</script>
<style lang="scss" >
.board {
  width: 1000px;
  margin-left: 20px;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: flex-start;
}
.kanban {
  .todo {
    .board-column-header {
      background: #4a9ff9;
    }
  }
  .working {
    .board-column-header {
      background: #f9944a;
    }
  }
  .done {
    .board-column-header {
      background: #2ac06d;
    }
  }
}
</style>

