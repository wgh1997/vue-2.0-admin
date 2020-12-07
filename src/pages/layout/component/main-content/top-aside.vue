<template>
  <aside class="aside__top">
    <span
      class="iconfont icon-nav toggleNavCollapse"
      :class="{ active: isSidebarNavCollapse }"
      @click="toggleNavCollapse"
    >
    </span>
    <el-breadcrumb separator="/">
      <transition-group name="breadcrumb">
        <!-- 防止面包屑导航出现 首页/首页， v-if="route.name!='home'" -->
        <el-breadcrumb-item
          v-for="(route, i) in crumbList"
          :key="route.name"
          :to="{ name: route.name }"
          :v-if="route.name != 'home'"
          :class="{ 'is-last-link': i == crumbList.length - 1 }"
        >
          {{ route.meta.name }}
        </el-breadcrumb-item>
      </transition-group>
    </el-breadcrumb>
    <div
      class="aside__top--right"
     
    >
      <div class="email"  @mouseover="showDownlist"
      @mouseleave="hideDownlist">
        <span class="iconfont icon-email"><i>2</i></span>
        <div class="header_downlist" v-show="downlist" style="width: 350px;right: -150px;">
          <h2>
            消息中心
            <b>2</b>
            <span class="fr">
              <a class="fblue">消息接收管理</a>
              <a class="fblue">更多</a>
            </span>
          </h2>
          <ul>
            <li>
              <div>
                <h4>echarts封装组件内容重构!</h4>
                <p class="fgrey9">12/7</p>
              </div>
            </li>
            <li>
              <div>
                <h4>添加全局Loading以及控制调用接口是否要使用全局Loading</h4>
                <p class="fgrey9">12/2</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="user-msg">
        <img
          class="user-img"
          :src="require('@/assets/image/4b98bf068563c399.jpg')"
          alt=""
        />
        <span class="user-name">GuoHui-王</span>
        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link">
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item>修改密码</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div class="quit-system" @click="loginOut">
        <span class="iconfont icon-quit"></span>
      </div>
    </div>
  </aside>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {
      downlist: false,
    };
  },
  computed: {
    ...mapState(["isSidebarNavCollapse", "crumbList"]),
  },
  methods: {
    showDownlist() {
      this.downlist = true;
    },
    hideDownlist() {
      this.downlist = false;
    },
    toggleNavCollapse() {
      this.$store.commit("toggleNavCollapse");
    },
    loginOut() {
      this.$store.commit("LOGIN_OUT");
      /* 防止切换角色时addRoutes重复添加路由导致出现警告 */
      window.location.reload();
    },
  },
};
</script>

<style lang="scss" scoped>
.aside__top {
  border-bottom: 1px solid #e5e5e5;
  height: 50px;
  line-height: 50px;
  position: fixed;
  left: 200px;
  top: 0;
  right: 0;
  background: #fff;
  z-index: 1000;
  transition: left 0.25s;
  .toggleNavCollapse {
    display: inline-block;
    margin-left: 8px;
    padding: 0 10px;
    font-size: 26px;
    vertical-align: middle;
    color: #333;
    cursor: pointer;
    transition: all 0.5s;
    &.active {
      transform: rotate(90deg);
    }
  }

  .aside__top--right {
    position: absolute;
    right: 10px;
    top: -1px;
    bottom: 0px;
    > div {
      position: relative;
      display: inline-block;
      text-align: center;
      vertical-align: middle;
      margin-left: 10px;
      padding: 0 15px;
      cursor: pointer;
      &:hover::after {
        transform-origin: 0 0;
        transform: scaleX(1);
      }
      &:first-child:before {
        border: none;
      }
      &::after {
        content: "";
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 2px;
        background: #ef4747;
        transform: scaleX(0);
        transform-origin: right 0;
        transition: transform 0.5s;
      }
      &::before {
        content: "";
        position: absolute;
        height: 20px;
        top: 50%;
        left: -8px;
        margin-top: -10px;
        border-left: 1px solid #ccc;
      }
      &.email {
        i {
          position: absolute;
          left: 18px;
          top: -12px;
          border-radius: 20px;
          background: red;
          color: #fff;
          text-align: center;
          font-size: 12px;
          line-height: 1.5;
          min-width: 20px;
          min-height: 20px;
        }
        .header_downlist {
          width: 350px;
          right: -150px;
          background: #ffffff;
          -webkit-box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.07);
          box-shadow: 0 2px 4px 2px rgba(0, 0, 0, 0.07);
          border-radius: 3px;
          width: 280px;
          position: absolute;
          right: -217px;
          top: 54px;
          z-index: 120;
          h2 {
            font-size: 12px;
            color: #333333;
            padding: 16px 24px;
            line-height: 16px;
            text-align: left;
            b {
              background: red;
              border-radius: 8px;
              display: inline-block;
              color: #fff;
              font-weight: normal;
              line-height: 16px;
              padding: 0 8px;
              vertical-align: top;
            }
            .fr {
              float: right;
              display: inline;
              .fblue {
                color: #409eff;
                cursor: pointer;
              }
              .fblue {
                border-left: 1px solid #e9e9e9;
                padding-left: 8px;
                margin-left: 8px;
              }
            }
          }
          ul {
            background-color: rgba(243, 243, 243, 0.5);
            padding: 8px 24px;
            list-style: none;
            outline: none;
            font-weight: normal;
            li {
              display: block;
              width: 100%;
              padding: 8px 0;
              text-align: left;
              position: relative;
              line-height: 38px;
              font-size: 12px;
              color: #627498;
              padding: 10px 0;
              position: relative;
              cursor: pointer;
              div{
                position: relative;
                font-size: 12px;
    color: #333333;
    line-height: 20px;
                h4 {
                margin-right: 80px;
                max-height: 40px;
                overflow: hidden;
              }
              .fgrey9 {
                position: absolute;
                right: 0;
                top: 0;
                color: #999;
              }
              }
              
            }
          }
        }
      }
      &.user-msg {
        .user-img {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          vertical-align: middle;
        }
        .user-name {
          color: #758eb5;
          padding: 0 4px;
        }
      }
      .iconfont {
        position: relative;
        font-size: 24px;
        color: #758eb5;
      }
    }
  }
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
