<template>
  <div>
    <!-- 顶部导航栏 -->
    <div class="footer_wrap">
      <!-- 路由导航 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/user">个人中心</router-link>
      <router-link to="/setting">设置页</router-link>
      <router-link to="/shopcar">购物车</router-link>
    </div>
    <!-- 下面内容 -->
    <div class="top">
      <!-- 路由出口 -->
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
}
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a,
span {
  cursor: pointer;
  flex: 1;
  text-decoration: none;
  padding: 15px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover,
span:hover {
  background-color: #555;
}

.top {
  padding-top: 50px;
}

.footer_wrap .router-link-active {
  background-color: #000;
}
</style>
