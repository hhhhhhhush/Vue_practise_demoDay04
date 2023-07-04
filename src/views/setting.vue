<template>
  <div>
    <h2>设置页(修改设置)</h2>
    <div class="user">
      <h3>用户信息 </h3>
      <p>姓名：{{ userInfo.name }} </p>
      <p>年龄：</p>
      <button @click="doClick1">点我修改</button>
    </div>
    <div class="setting" :style="{ color: $store.state.b.settingInfo.color, fontSize: $store.state.b.settingInfo.fontSize }">
      <h3>用户设置</h3>
      <p>颜色主题：{{ settingInfo.color }} </p>
      <p>字体大小：</p>
      <button @click="doClick2">点我设置</button>
    </div>
    <div class="shopcar">
      <h3>购物车数量</h3>
      <p>当前数量：{{ count }} </p>
      <p>总价格：{{ total }} </p>
      <button @click="doClick3">点我购买</button>
    </div>
  </div>
</template>

<!-- vuex语法 -->
<script>
/*
1.模块化的原始写法
this.$store.state.模块名.属性名
this.$tsore.getters['模块名/属性名']  this.$tsore.getters['c/total']
this.$store.commit('模块名/mutations名',载荷)
this.$store.dispatch('模块名/action名',载荷)
2.模块化辅助函数
  自动生成computed
    ...mapState('模块名',['属性名'])
    ...mapGetters('模块名',['属性名'])
  自动生成methods
    ...mapMutations('模块名',['mutation名'])
    ...maoActions('模块名',['action名'])
*/
import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';
export default {
  name: 'setting-page',
  computed: {
    // ...mapState('模块名',['属性名'])
    ...mapState('a', ['userInfo']),
    ...mapState('b', ['settingInfo']),
    ...mapState('c',['count']),
    ...mapGetters('c',['total'])
    // userInfo() {
    //   return this.$store.state.a.userInfo
    // }
    // total() {
    //   return this.$store.getters['c/total']
    // }
  },
  methods: {
    ...mapMutations('a',['updateUserInof']),
    ...mapMutations('b',['updateSettingInof']),
    ...mapActions('c',['setCount']),
    // updateUserInof(payload) {
    //   this.$store.commit('a/updateUserInof',payload)
    // }
    doClick1 () {
      this.updateUserInof({ name:"Jiji",age:38 })
    },
    doClick2 () {
      this.updateSettingInof({ color:'blue',fontSize:'30px' })
    },
    doClick3 () {
      this.setCount( this.count+1 )
    }
  },
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
