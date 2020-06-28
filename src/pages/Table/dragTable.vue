<template>
  <div class="flex">
    <div class="ces-main">
      <ces-table size='mini'
                 :isSelection='false'
                 :isIndex='false'
                 :isPagination='true'
                 :isHandle='false'
                 :tableData='tableData'
                 :tableCols='tableCols'
                 :pagination='pagination'>
      </ces-table>
    </div>
  </div>
</template>
<style scope>
.item {
  width: 100%;
  height: 100%;
  border: solid 1px #ccc;
}
</style>

<script>
import Sortable from 'sortablejs'
import cesTable from '@/components/element_table/index'

export default {
  name: 'operationsAdd',
  data () {
    return {
      tableData: [
        {          name: '张三',
          age: '12',
          sex: '男',
          interst: '女',
          input: '黄金糕',
          options: [{
            value: '选项1',
            label: '黄金糕'
          }, {
            value: '选项2',
            label: '双皮奶'
          }, {
            value: '选项3',
            label: '蚵仔煎'
          }, {
            value: '选项4',
            label: '龙须面'
          }, {
            value: '选项5',
            label: '北京烤鸭'
          }],
          value: ''        },
        { name: '筱华', age: '27', sex: '女', interst: '羽毛球', input: '1' },
        { name: '张三', age: '12', sex: '男', interst: '女', input: '1' },
        { name: '筱华', age: '27', sex: '女', interst: '羽毛球', input: '1' },
        { name: '筱华', age: '27', sex: '女', interst: '羽毛球', input: '1' },
        { name: '筱华', age: '27', sex: '女', interst: '羽毛球', input: '1' },
        { name: '筱华', age: '27', sex: '女', interst: '羽毛球', input: '1' }

      ],
      tableCols: [
        { label: '姓名', prop: 'name', sortable: 'sortable' },
        { label: '年龄', prop: 'age' },
        { label: '性别', prop: 'sex' },
        { label: '爱好', prop: 'interst' },
        {          label: '操作',
          type: 'Button',
          btnList: [
            { type: 'primary', label: '编辑', handle: row => { console.log(row) } },
            { type: 'danger', label: '删除', handle: (row, r) => { console.log(row, r) } }
          ]        }

      ],
      // 分页
      pagination: {
        pageSize: 10,
        pageNum: 1,
        total: 7
      }
    }
  },
  methods: {
    test () {
      const tbody = document.querySelector('.el-table__body-wrapper tbody')
      const _this = this
      Sortable.create(tbody, {
        onEnd ({ newIndex, oldIndex }) {
          const currRow = _this.tableData.splice(oldIndex, 1)[0]
          _this.tableData.splice(newIndex, 0, currRow)
        }
      })
    }
  },
  mounted () {
    this.test()
  },

  components: {
    cesTable
    // SearchForm

  }
}
</script>
