<template>
  <div class="ces-main">
    <!-- <search-form
      size='mini'
      labelWidth = '80px'
      :searchData = "searchData"
      :searchForm = "searchForm"
      :searchHandle="searchHandle"></search-form> -->
    <ces-table size='mini'
               :isSelection='false'
               :isIndex='false'
               :isPagination='true'
               :isHandle='false'
               :tableData='tableData'
               :tableCols='tableCols'
               :tableHandles='tableHandles'
               :pagination='pagination'>
    </ces-table>
  </div>
</template>

<script>
import cesTable from "@/components/element_table/index";
export default {
  data() {
    let sexs = [
      { label: "男", value: "M" },
      { label: "女", value: "F" }
    ];
    let sexProps = { label: "label", value: "value" };
    let intersts = [
      { label: "羽毛球", value: "badminton" },
      { label: "篮球", value: "basketball" }
    ];
    let interstProps = { label: "label", value: "value" };
    return {
      // 查询表单
      searchData: {
        name: null,
        age: null,
        sex: null,
        interst: null
      },
      //   searchForm:[
      //     {type:'Input',label:'姓名',prop:'name',width:'180px',placeholder:'请输入姓名...'},
      //     {type:'Input',label:'年龄',prop:'age',width:'180px',placeholder:'请输入年龄...'},
      //     {type:'Select',label:'性别',prop:'sex',width:'180px',options:sexs,props:sexProps,change:row=>'',placeholder:'请选择性别...'},
      //     {type:'Checkbox',label:'爱好',width:'180px',prop:'interst',checkboxs:intersts,props:interstProps}
      //   ],
      searchHandle: [
        { label: "查询", type: "primary", handle: () => "" },
        { label: "重置", type: "primary", handle: () => "" }
      ],

      // 表格
      // 内容
      tableData: [
        {
          name: "张三",
          age: "12",
          sex: "男",
          interst: "女",
          input: "黄金糕",
          options: [
            {
              value: "选项1",
              label: "黄金糕"
            },
            {
              value: "选项2",
              label: "双皮奶"
            },
            {
              value: "选项3",
              label: "蚵仔煎"
            },
            {
              value: "选项4",
              label: "龙须面"
            },
            {
              value: "选项5",
              label: "北京烤鸭"
            }
          ],
          value: ""
        },
        { name: "筱华", age: "27", sex: "女", interst: "羽毛球", input: "1" },
        { name: "张三", age: "12", sex: "男", interst: "女", input: "1" },
        { name: "筱华", age: "27", sex: "女", interst: "羽毛球", input: "1" },
        { name: "筱华", age: "27", sex: "女", interst: "羽毛球", input: "1" },
        { name: "筱华", age: "27", sex: "女", interst: "羽毛球", input: "1" },
        { name: "筱华", age: "27", sex: "女", interst: "羽毛球", input: "1" }
      ],
      tableCols: [
        { label: "姓名", prop: "name", sortable: "sortable" },
        { label: "年龄", prop: "age" },
        { label: "性别", prop: "sex" },
        { label: "爱好", prop: "interst" },
        {
          label: "操作",
          type: "Button",
          btnList: [
            {
              type: "primary",
              label: "编辑",
              handle: row => {
                console.log(row);
              }
            },
            {
              type: "danger",
              label: "删除",
              handle: (row, r) => {
                console.log(row, r);
              }
            }
          ]
        }
      ],
      tableHandles: [
        {
          label: "新增",
          type: "primary",
          handle: row => {
            console.log(row);
          }
        }
      ],
      // 表头
      // tableCols:[
      //   {label:'姓名',prop:'name'},
      //   {label:'年龄',prop:'age'},
      //   {label:'性别',prop:'sex'},
      //   {label:'爱好',prop:'interst'},
      //   {label:'操作',type:'Button',btnList:[
      //     {type:'primary',label:'编辑',handle:row=>{console.log(row)}},
      //     {type:'danger',label:'删除',handle:(row,r)=>{console.log(row,r)}}
      //   ]},
      //   {label:'测试Input',type:'Input',prop:'input',focus:(row)=>{console.log(row)}},
        // {label:'测试html',type:'Html',prop:'input',html:(row)=>{
        //      if(row.input==='1'){
        //        return ('<p>我是1呀<p>')
        //      }else{
        //        return ('<p>我不是1呀<p>')
        //      }
        // }},
      //   {label:'测试下拉框',type:'Select',prop:'value',props:'value',options:[{
      //     value: '选项1',
      //     label: '黄金糕'
      //   }, {
      //     value: '选项2',
      //     label: '双皮奶'
      //   }, {
      //     value: '选项3',
      //     label: '蚵仔煎'
      //   }, {
      //     value: '选项4',
      //     label: '龙须面'
      //   }, {
      //     value: '选项5',
      //     label: '北京烤鸭'
      //   }],change:(row,i,v)=>{
      //        console.log(row,i,v)

      //   }},
      // ],
      // tableHandles:[
      //   {label:'新增',type:'primary',handle:row=>{
      //       console.log(row)
      //   }}
      // ],
      // 分页
      pagination: {
        pageSize: 10,
        pageNum: 1,
        total: 7
      }
    };
  },
  components: {
    cesTable
    // SearchForm
  }
};
</script>

<style>
</style>
