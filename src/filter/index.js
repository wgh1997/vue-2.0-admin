import moment from 'moment'//导入文件 
const filters = {
  date (v) {
    var d = new Date(v);
    return d.getFullYear()
      + "-" + ((d.getMonth() + 1)).toString().padStart(2, "0")
      + "-" + (d.getDate()).toString().padStart(2, "0")
      + " " + (d.getHours()).toString().padStart(2, "0")
      + ":" + (d.getMinutes()).toString().padStart(2, "0")
      + ":" + (d.getSeconds()).toString().padStart(2, "0")
  },
  currency (v) {
    return "￥" + v.toFixed(2)
  },
  dateFormat (daraStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    var bagin_r = daraStr.match(/^(\d{4})(-)(\d{2})(-)(\d{2})/);
    if (bagin_r == null) {
      return daraStr
    } else {
      return moment(daraStr).format(pattern)
    }
  }
}
export default filters;