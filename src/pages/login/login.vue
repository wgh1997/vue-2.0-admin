<template>
  <div class="clearfix"
       id="login_wrap">
    <canvas id="canvas"> 您的浏览器不支持canvas标签，请您更换浏览器 </canvas>
    <div id="login">
      <div class="login--account">
        <span>账号：</span>
        <input type="text"
               placeholder="随便输"
               name="account"
               v-model.trim="account" />
      </div>
      <div class="login--password">
        <span>密码：</span>
        <input type="password"
               placeholder="随便输"
               name="password"
               v-model.trim="password"
               @keyup.enter="login" />
      </div>
      <p class="login--btn">
        <button id="loginBtn"
                @click="login">登录</button>
      </p>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/permission'
export default {
  data () {
    return {
      account: '',
      password: ''
    }
  },
  mounted () {
    var canvas = document.getElementById("canvas");
    var can = canvas.getContext("2d");
    var s = window.screen;//获取屏幕
    var w = canvas.width = s.width;//获取屏幕宽度
    var h = canvas.height = s.height;//获取屏幕高度

    can.fillStyle = color2();

    var words = Array(256).join("1").split("");
    //设置一个包含256个空元素的数组，join("1")用来把数组里的元素拼接成字符串，split("")过滤掉数组里的空元素

    setInterval(draw, 50);


    // can.font="30px 微软雅黑"; //只设置一个不生效，一定要两个属性都设
    // //绘制实心的文本：绘制的文本，文本的坐标x，文本的坐标y
    // can.fillText("黑客帝国",100,100);
    // // setInterval(draw,50);



    function draw () {
      //can.fillRect()画一个实心矩形:坐标x，坐标y，矩形宽，举行高
      can.fillStyle = 'rgba(0,0,0,0.05)';
      can.fillRect(0, 0, w, h);
      can.fillStyle = color2();
      words.map(function (y, n) {
        let text = String.fromCharCode(Math.ceil(65 + Math.random() * 57)); //转换为键盘上值
        let x = n * 10;
        can.fillText(text, x, y)
        words[n] = (y > 758 + Math.random() * 484 ? 0 : y + 10);
      });//数组元素的一个映射
    }

    //获取随机颜色，三种方法
    function color1 () {
      var colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
      var color = "";
      for (var i = 0; i < 6; i++) {
        //Math.random()产生一个0-1之间的小数
        var n = Math.ceil(Math.random() * 15);
        color += "" + colors[n];
        // console.log(color);
      }
      return '#' + color;
    }

    function color2 () {
      var color = Math.ceil(Math.random() * 16777215).toString(16);
      // for( var i=color.length; i<6; i++ ){
      // 	color = '0'+color;
      // }
      while (color.length < 6) {
        color = '0' + color;
      }
      return '#' + color;
    }

    function color3 () {
      return "#" + (function (color) {
        return new Array(7 - color.length).join("0") + color;
        //神奇的方法，总共字符串有6位，如果只产生了3位，则前面应该补三个0，在长度为7-3=4的空数组中利用join插入0，则为['',0,'',0,'',0,''],刚好三个0补在前面
      })((Math.random() * 0x1000000 << 0).toString(16))
      // << 0 也是一种取整的方法
    }


  },
  methods: {
    async login () {
      try {
        let data = await login()
        console.log(data)
        let token = data.token
        this.$store.commit('LOGIN_IN', token)
        this.$router.replace('/')
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
body {
  overflow: hidden;
}
.title {
  text-align: center;
  font-size: 22px;
  padding-top: 100px;
}
#web_bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 1000px;
  z-index: -10;
  zoom: 1;
  background-color: #fff;
  background-repeat: no-repeat;
  background-size: cover;
  -webkit-background-size: cover;
  -o-background-size: cover;
  background-position: center 0;
}
#login_wrap {
  position: relative;
  background: rgba(64, 64, 194, 0.1);
  > div {
    border-radius: 25px;
    filter: alpha(opacity=50); /*ie*/
    opacity: 0.5;
    background: #fffff0;
    width: 479px;
    height: 325px;
    padding: 30px 40px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    > div {
      padding: 10px 0;
      border-bottom: 1px solid #ddd;
      &.login--account {
        margin: 25px 0 30px;
      }
      span {
        color: #666;
        display: inline-block;
        width: 84px;
        font-size: 20px;
      }
      input {
        background: none;
        font-size: 16px;
        border: none;
        height: 30px;
        width: 280px;
        padding-left: 12px;
        box-sizing: border-box;
        color: #666;
        &.error {
          border: 1px solid #f00;
        }
        &::-webkit-input-placeholder {
          color: #aaa;
        }
      }
    }

    p {
      text-align: right;
      &.login--btn {
        button {
          width: 100%;
          height: 50px;
          font-size: 18px;
          background: #000;
          border: none;
          margin-top: 30px;
          color: #fff;
          border-radius: 6px;
          cursor: pointer;
        }
      }
      a {
        color: #fff;
        display: inline-block;
        padding: 0 15px;
        font-size: 14px;
      }
    }
  }
}
</style>
