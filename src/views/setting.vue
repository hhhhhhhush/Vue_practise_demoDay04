<template>
  <div>
    <h2>设置页(修改设置)</h2>
    <div class="user">
      <h3>用户信息</h3>
      <p>姓名：</p>
      <p>年龄：</p>
      <button>点我修改</button>
    </div>
    <div class="setting">
      <h3>用户设置</h3>
      <p>颜色主题：</p>
      <p>字体大小：</p>
      <button>点我设置</button>
    </div>
    <div class="shopcar">
      <h3>购物车数量</h3>
      <p>当前数量：</p>
      <button>点我购买</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'setting-page'
}
</script>

<style scoped>
.user {
  border: 2px solid green;
  margin: 5px;
}

.setting {
  border: 2px solid orange;
  margin: 5px;
}

.shopcar {
  border: 2px solid magenta;
  margin: 5px;
}
</style>
