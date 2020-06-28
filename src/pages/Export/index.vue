<template>
  <div class="threeLevelMain"
       id="resumeId">
    <!-- <div> -->

    <!-- 报价容器 -->
    <div class="quoteContainer">

      <div class="quote_info clearfix">
        <h3 class="h3_title">报价单</h3>
        <div class="quote_itemBox">
          <div class="quote_item">
            <span class="quote_label">客户名称：</span>
            <p class="quote_p">{{form.custName}}</p>
          </div>
          <div class="quote_item">
            <span class="quote_label">联系方式：</span>
            <p class="quote_p">{{form.phoneNumber}}</p>
          </div>
        </div>
        <div class="quote_itemBox">
          <div class="quote_item">
            <span class="quote_label">项目要求：</span>
            <p class="quote_p">{{form.projectRequirement}}</p>
          </div>
          <div class="quote_item">
            <span class="quote_label">备注：</span>
            <p class="quote_p">{{form.remark}}</p>
          </div>
        </div>
      </div>

      <div class="quote_table clearfix">
        <el-table border
                  class="table_domQuote"
                  ref="tableDomQuote"
                  size="small"
                  :data="tableData"
                  style="width: 100%">
          <el-table-column prop="number"
                           width="80"
                           label="序号"
                           align="center"></el-table-column>
          <el-table-column label="设备名称"
                           prop="name"
                           align="center"></el-table-column>
          <el-table-column label="数量"
                           prop="num"
                           align="center"></el-table-column>
          <el-table-column prop="salePrice"
                           label="销售单价"
                           align="center"></el-table-column>
          <el-table-column prop="saleTotal"
                           label="销售合计"
                           align="center"></el-table-column>
          <el-table-column label="备注"
                           prop="remark"
                           align="center"></el-table-column>
          <div slot="append">
            <div class="quoteTable">
              <span class="quoteTable_sp1">合计：</span>
              <span class="quoteTable_sp1">{{form.totalPrice}}</span>
            </div>
          </div>
        </el-table>
      </div>
    </div>

    <div class="reasonBox clearfix">
      <div class="title_checkReason">审核备注：</div>
      <div class="checkReasonMain">
        <div class="p_box">
          <p class="p_checkReason">{{form.checkReason}}</p>
        </div>
      </div>
    </div>

    <div class="botmBtnContainer">
      <el-button @click="exportWord"
                 size="small"
                 type="primary">导出word</el-button>
      <el-button @click="exportExcelClick"
                 size="small"
                 type="primary">导出excel</el-button>
      <el-button @click="exportpdfClick"
                 size="small"
                 type="primary">导出pdf</el-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
export default {

  components: {


  },

  data () {
    return {


      // 表单对象
      form: {
        custName: "杰斯", // 客户姓名
        phoneNumber: "138xxxxxxxx", // 联系方式
        projectRequirement: "为了更美好的明天而战", // 项目要求
        totalPrice: 140, // 合计报价
        remark: "QEWARAEQAAAAAAAAA", // 备注
        checkReason: '同意' // 审核备注
      },
      // 表格信息
      tableData: []
    };
  },
  created () {

  },
  created () {
    this.tableData = [
      {
        number: 1, // 序号
        name: "设备1", // 设备名称
        num: 1, // 数量
        salePrice: 10, // 销售单价
        saleTotal: 10, // 销售合计
        remark: "啦啦啦" // 备注
      },
      {
        number: 2, // 序号
        name: "设备2", // 设备名称
        num: 2, // 数量
        salePrice: 20, // 销售单价
        saleTotal: 40, // 销售合计
        remark: "啦啦啦" // 备注
      },
      {
        number: 3, // 序号
        name: "设备3", // 设备名称
        num: 3, // 数量
        salePrice: 30, // 销售单价
        saleTotal: 90, // 销售合计
        remark: "啦啦啦" // 备注
      }
    ];
  },
  mounted () {

  },
  methods: {


    // 点击导出word
    exportWord: function () {
      let _this = this;
      // 读取并获得模板文件的二进制内容
      JSZipUtils.getBinaryContent("input.docx", function (error, content) {
        // input.docx是模板。我们在导出的时候，会根据此模板来导出对应的数据
        // 抛出异常
        if (error) {
          throw error;
        }

        // 创建一个JSZip实例，内容为模板的内容
        let zip = new JSZip(content);
        // 创建并加载docxtemplater实例对象
        let doc = new window.docxtemplater().loadZip(zip);
        // 设置模板变量的值
        doc.setData({
          ..._this.form,
          table: _this.tableData
        });

        try {
          // 用模板变量的值替换所有模板变量
          doc.render();
        } catch (error) {
          // 抛出异常
          let e = {
            message: error.message,
            name: error.name,
            stack: error.stack,
            properties: error.properties
          };
          console.log(JSON.stringify({ error: e }));
          throw error;
        }

        // 生成一个代表docxtemplater对象的zip文件（不是一个真实的文件，而是在内存中的表示）
        let out = doc.getZip().generate({
          type: "blob",
          mimeType:
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
        });
        // 将目标文件对象保存为目标类型的文件，并命名
        saveAs(out, "报价单.docx");
      });
    },
    exportpdfClick: function () {
      this.getPdf('resumeId', name)
    },
    exportExcelClick: function () {
      this.outExe()
    },
    // 导出
    outExe () {
      this.$confirm('此操作将导出excel文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.excelData = this.tableData //你要导出的数据list。
        this.export2Excel()
      }).catch(() => {

      });
    },
    export2Excel () {
      var that = this;
      require.ensure([], () => {
        const { export_json_to_excel } = require('./excel/expor2Excal.js'); //这里必须使用绝对路径
        const tHeader = ['序号', '设备名称', '数量', '销售单价', '销售合计', '备注',]; // 导出的表头名
        const filterVal = ['number', 'name', 'num', 'salePrice', 'saleTotal', 'remark']; // 导出的表头字段名
        const list = that.excelData;
        const data = that.formatJson(filterVal, list);

        export_json_to_excel(tHeader, data, `excel`);// 导出的表格名称，根据需要自己命名
      })
    },
    formatJson (filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => v[j]))
    }
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-size: 12px;
  font-family: "微软雅黑", "宋体";
  list-style: none;
  box-sizing: border-box;
}
// 清除浮动
.clearfix:after {
  content: "";
  height: 0;
  line-height: 0;
  display: block;
  clear: both;
  visibility: hidden;
}

.clearfix {
  zoom: 1;
}
.quoteContainer {
  .quote_info {
    width: 800px;
    margin: 0 auto;
    .h3_title {
      float: left;
      width: 100%;
      font-size: 20px;
      line-height: 40px;
      text-align: center;
      margin-bottom: 30px;
    }
    .quote_itemBox {
      float: left;
      width: 100%;
      margin-bottom: 20px;
      .quote_item {
        float: left;
        width: 50%;
        display: flex;
        .quote_label {
          width: 100px;
          text-align: right;
          line-height: 32px;
        }
        .quote_p {
          flex: 1;
          line-height: 32px;
        }
      }
    }
  }
  .quote_table {
    padding: 0 20px;
    .table_domQuote {
      .quoteTable {
        font-size: 14px;
        padding-left: 30px;
        border-top: 1px solid #ebeef5;
        .quoteTable_sp1 {
          display: inline-block;
          line-height: 50px;
        }
      }
    }
  }
}
.reasonBox {
  padding: 0 20px 20px 20px;
  .title_checkReason {
    line-height: 50px;
  }
  .checkReasonMain {
    .p_box {
      border: 1px solid #ebeef5;
      padding: 10px 20px;
      .p_checkReason {
        height: 30px;
        line-height: 30px;
      }
    }
  }
}
// 底部按钮
.threeLevelMain {
  width: 100%;
  height: 100%;
}
.botmBtnContainer {
  text-align: center;
  padding: 20px;
}
.orgchart-container {
  width: 100%;
  height: 100%;
}
</style>

