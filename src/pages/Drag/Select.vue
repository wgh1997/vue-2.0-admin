<template>
  <div class="components-container">
    <!-- <aside>drag-list base on
      <a href="https://github.com/SortableJS/Vue.Draggable"/vue-element-admin/article/list
         target="_blank">Vue.Draggable</a>
    </aside> -->
    <div class="editor-container">
      <dnd-list :list1="list1"
                :list2="list2"
                list1-title="列表"
                list2-title="列表项_全部" />
    </div>
  </div>
</template>

<script>
import DndList from '../../components/DndList/index'
// import { fetchList } from '@/api/article'

export default {
  name: 'DndListDemo',
  components: { DndList },
  data () {
    return {
      list1: [{
        author: 'a奥术大师大所多aa', id: 1, title: 'title'
      }, {
        author: '大叔大婶大所多群', id: 2, title: 'tit奥术大师大所多le'
      }],
      list2: [{
        author: 'aa奥术大师大所多a', id: 3,
        title: '奥术大师大所多'
      }, {
        author: 'bb奥术大师大所多b', id: 4, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 5, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 6, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 7, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 8, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 9, title: 'tit奥术大师大所le'
      }, {
        author: 'bb奥术大师大所多b', id: 10, title: 'tit奥术大师大所le'
      }]
    }
  },
  created () {
    // this.getData()
  },
  methods: {
    // getData () {
    //   this.listLoading = true
    //   fetchList().then(response => {
    //     this.list1 = response.data.items.splice(0, 5)
    //     this.list2 = response.data.items
    //   })
    // }
  }
}
</script>

