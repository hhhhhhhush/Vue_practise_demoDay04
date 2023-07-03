<template>
  <div>
    <!-- el-form : 表单父元素(相当于form)
             label-position : 提示文字对齐方式. 必须要设置label-width,否则对齐方式无效
         el-form-item : 表单行 (相当于div)
             label : item的提示文字
     -->
     <el-form label-position="right" label-width="80px"
     :model="formData" :rules="formDataRules" ref="formDataRef"
     >
      <!-- 第1行 -->
      <el-form-item label="用户名:" prop="username">
        <el-input v-model="formData.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <!-- 第2行 -->
      <el-form-item label="密码:" prop="password">
        <el-input v-model="formData.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <!-- 第3行 -->
      <el-form-item label="确认密码:" prop="repassword">
        <el-input v-model="formData.repassword" placeholder="请确认密码"></el-input>
      </el-form-item>
      <!-- 第4行 -->
      <el-form-item>
        <el-button type="primary" @click="doLogin"> 注册 </el-button>
        <el-button type="success" @click="doReset"> 重置 </el-button>
      </el-form-item>
     </el-form>

  </div>
</template>

<script>
export default {
  name: 'user-page',
  data () {
    return {
      // 1.表单数据
      formData: {
        username: 'admin',
        password: '123456',
        repassword: '123456'
      },
      // 2.表单校验规则
      formDataRules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { pattern: /^\w{6,15}$/, message: '用户名6-15位', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { pattern: /^\w{6,15}$/, message: '密码6-15位', trigger: 'blur' }
        ],
        repassword: [
          { required: true, message: '请确认密码', trigger: 'blur' },
          { pattern: /^\w{6,15}$/, message: '确认密码6-15位', trigger: 'blur' },
          {
            validator: (rule, data, callback) => {
              // rule : 规则  data: 当前的数据  callback回调
              if (this.formData.password === this.formData.repassword) {
                callback() // 不传参,校验通过
              } else {
                callback(new Error('两次密码不一致'))// 传参,校验不通过
              }
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    async doLogin () {
      // (1)检查校验是否全部通过
      this.$refs.formDataRef.validate(valid => {
        if (valid) {
          console.log('发送ajax')
        }
      })

      // await this.$refs.formDataRef.validate()
      // console.log('发送ajax')
    },
    doReset () {
      // el-form组件实例.resetFields() : 让表单恢复到初始状态
      this.$refs.formDataRef.resetFields()
      /* 如果表单一开始就是空的,可以用上面的方法。 如果表单一开始有默认值, 还需要额外执行下面的代码清空文本 */
      // 清空表单的文本 : 清空数据来实现
      this.formData = {
        username: '',
        password: '',
        repassword: ''
      }
    }
  }

}
</script>

<style scoped>
.el-form{
  width: 500px;
  margin: 50px auto;
}
</style>
