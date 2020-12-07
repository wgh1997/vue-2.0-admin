<!--表格组件 -->
<template>
  <section class="ces-table-page">
    <!-- 表格操作按钮 -->
    <section class="ces-handle" v-if="isHandle">
      <el-button
        v-for="(item, index) in tableHandles"
        :size="item.size || size"
        :type="item.type"
        :key="index"
        :icon="item.icon"
        @click="item.handle()"
        >{{ item.label }}</el-button
      >
    </section>
    <!-- 数据表格 -->
    <section class="ces-table">
      <el-table
        :data="
          tableData.slice(
            (pagination.pageNum - 1) * pagination.pageSize,
            pagination.pageNum * pagination.pageSize
          )
        "
        :size="size"
        height="100%"
        stripe
        :border="isBorder"
        @select="select"
        @select-all="selectAll"
        v-loading="loading"
        :defaultSelections="defaultSelections"
        ref="cesTable"
      >
        <el-table-column
          v-if="isSelection"
          type="selection"
          align="center"
        ></el-table-column>
        <el-table-column
          v-if="isIndex"
          type="index"
          :label="indexLabel"
          align="center"
          width="50"
        ></el-table-column>
        <!-- 数据栏 -->
        <el-table-column
          v-for="item in tableCols"
          :sortable="item.sortable"
          :key="item.id"
          @click="item.handle(scope.row)"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          :align="item.align"
          :render-header="item.require ? renderHeader : null"
        >
          <template slot-scope="scope">
            <!-- 跳转 -->
            <span
              v-if="item.type === 'Jump'"
              @click="item.handle(scope.row)"
              style="cursor: pointer; color: #007aff"
              >{{ scope.row[item.prop]}}</span
            >
            <!-- html -->
            <div
              v-if="item.type === 'Html'"
              v-html="item.html(scope.row)"
            ></div>
            <span v-if="item.type === 'Ioc'">
              <!-- 图标 -->
              <i
                v-for="(btn, index) in item.btnList"
                v-show="
                  !btn.isShow ||
                  (btn.isShow && btn.isShow(scope.row, btn.isDisabled))
                "
                :disabled="btn.isDisabled && btn.isDisabled(scope.row)"
                :type="btn.type"
                :key="index"
                :size="btn.size || size"
                :class="btn.icon"
                @click="btn.handle(scope.row)"
              ></i>
            </span>
            <!-- 按钮 -->
            <span v-if="item.type === 'Button'">
              <el-button
                v-for="(btn, index) in item.btnList"
                v-show="
                  !btn.isShow ||
                  (btn.isShow && btn.isShow(scope.row, btn.isDisabled))
                "
                :disabled="btn.isDisabled && btn.isDisabled(scope.row)"
                :type="btn.type"
                :key="index"
                :size="btn.size || size"
                :icon="btn.icon"
                @click="btn.handle(scope.row)"
                >{{ btn.label }}</el-button
              >
            </span>
            <!-- 输入框 -->
            <el-input
              v-if="item.type === 'Input'"
              v-model="scope.row[item.prop]"
              :size="size"
              @focus="item.focus && item.focus(scope.row)"
            ></el-input>
            <!-- 下拉框 -->
            <el-select
              v-if="item.type === 'Select'"
              v-model="scope.row[item.prop]"
              :size="size"
              :props="item.props"
              @change="
                item.change &&
                  item.change(scope.row, item.options, item.props.label)
              "
            >
              <el-option
                v-for="op in item.options"
                :label="op.label"
                :value="op.value"
                :key="op.value"
              ></el-option>
            </el-select>
            <!-- 单选 -->
            <el-radio-group
              v-if="item.type === 'Radio'"
              v-model="scope.row[item.prop]"
              
              @change="item.change && item.change(scope.row)"
            >
              <el-radio
                v-for="(ra, index) in item.radios"
                :key="index"
                :label="ra.value"
                >{{ ra.label }}</el-radio
              >
            </el-radio-group>
            <!-- 复选框 -->
            <el-checkbox-group
              v-if="item.type === 'Checkbox'"
              v-model="scope.row[item.prop]"
              
              @change="item.change && item.change(scope.row)"
            >
              <el-checkbox
                v-for="(ra, index) in item.checkboxs"
                :key="index"
                :label="ra.value"
                >{{ ra.label }}</el-checkbox
              >
            </el-checkbox-group>
            <!-- 评价 -->
            <el-rate
              v-if="item.type === 'Rate'"
              v-model="scope.row[item.prop]"
              
              @change="item.change && item.change(scope.row)"
            ></el-rate>
            <!-- 开关 -->
            <el-switch
              v-if="item.type === 'Switch'"
              v-model="scope.row[item.prop]"
              @change="item.change && item.change(scope.row)"
            ></el-switch>
            <!-- 图像 -->
            <el-image
              v-if="item.type === 'Image'"
              style="width: 100px; height: 100px"
              fit="fit"
              :src="scope.row[item.prop]"
              @click="item.handle && item.handle(scope.row)"
            />
            <!-- 滑块 -->
            <el-slider
              v-if="item.type === 'Slider'"
              v-model="scope.row[item.prop]"
              
              @change="item.change && item.change(scope.row)"
            ></el-slider>
            <!-- 默认 -->
            <span
              v-if="!item.type"
              :style="item.itemStyle && item.itemStyle(scope.row)"
              :class="item.itemClass && item.item.itemClass(scope.row)"
              >{{
                (item.formatter && item.formatter(scope.row)) ||
                scope.row[item.prop]
              }}</span
            >
          </template>
        </el-table-column>
      </el-table>
    </section>
    <!-- 分页 -->
    <section class="ces-pagination" v-if="isPagination">
      <el-pagination
        style="display: flex; justify-content: center; align-items: center"
        @current-change="handleCurrentChange"
        @size-change="handleSizeChange"
        layout="prev, pager, next,jumper,total,sizes"
        :page-size="pagination.pageSize"
        :current-page="pagination.pageNum"
        :total="pagination.total"
      ></el-pagination>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    // 表格型号：mini,medium,small
    size: { type: String, default: "medium" },
    isBorder: { type: Boolean, default: true },
    loading: { type: Boolean, default: false },
    // 表格操作
    isHandle: { type: Boolean, default: false },
    tableHandles: { type: Array, default: () => [] },
    // 表格数据
    tableData: { type: Array, default: () => [] },
    // 表格列配置
    tableCols: { type: Array, default: () => [] },
    // 是否显示表格复选框
    isSelection: { type: Boolean, default: false },
    defaultSelections: { type: [Array, Object], default: () => null },
    // 是否显示表格索引
    isIndex: { type: Boolean, default: false },
    indexLabel: { type: String, default: "序号" },
    // 是否显示分页
    isPagination: { type: Boolean, default: true },
    // 分页数据
    pagination: {
      type: Object,
      default: () => ({ pageSize: 10, pageNum: 1, total: 0 }),
    },
  },
  data() {
    return {};
  },
  watch: {
    defaultSelections(val) {
      this.$nextTick(function () {
        if (Array.isArray(val)) {
          val.forEach((row) => {
            this.$refs.cesTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.cesTable.toggleRowSelection(val);
        }
      });
    },
  },
  methods: {
    // 表格勾选
    select(rows, row) {
      this.$emit("select", rows, row);
    },
    // 全选
    selectAll(rows) {
      this.$emit("select", rows);
    },
    //
    handleCurrentChange(val) {
      this.pagination.pageNum = val;
      this.$emit("refresh");
    },
    handleSizeChange(val) {
      this.pagination.pageSize = val;
      this.$emit("refresh");
    },

    // tableRowClassName({rowIndex}) {
    //     if (rowIndex % 2 === 0) {
    //         return "stripe-row";
    //     }
    //     return "";
    // }
    renderHeader(h, obj) {
      return h("span", { class: "ces-table-require" }, obj.column.label);
    },
  },
};
</script>

<style scoped>
.ces-table-page {
  width: 100%;
}
.ces-table-require::before {
  content: "*";
  color: red;
}
.el-pagination {
  margin: 12px 0 0 0;
  float: right;
}
.ces-table-page .el-table th {
  background: #f5f5f5;
  height: 45px;
}
.ces-table-page .el-table .cell {
  text-align: center;
}
.ces-table-page .el-table thead {
  font-size: 14px;
  color: #333333;
}
.ces-table-page .el-table td,
.el-table th {
  padding: 0 0 0 0;
  height: 45px;
}
.ces-table-page .el-table th {
  padding: 0 0 0 0;
  height: 45px;
}
.el-pagination__editor.el-input .el-input__inner {
  height: 28px !important;
}
.el-input--mini .el-input__inner {
  height: 28px !important;
}
.ces-table-page
  .el-table--striped
  .el-table__body
  tr.el-table__row--striped
  td {
  background: #f5f5f5 100%;
}
.ces-table-page .el-table .descending .sort-caret.descending {
  border-top-color: red;
}
.ces-table-page .el-table .ascending .sort-caret.ascending {
  border-bottom-color: red;
}
.ces-pagination {
  height: 56px;
}
.el-table--scrollable-y .el-table__body-wrapper {
  height: 100% !important;
}
</style>