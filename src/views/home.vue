<template>
  <div>
    <!-- 表格组件el-table . data属性就是数组, 会自动根据数组生成tr
      el-table-column是表格里面的列。 label是表头文字
    -->

    <el-table :data="tableData">
      <!-- 第1列 -->
      <el-table-column label="姓名" prop="name"></el-table-column>
      <!-- 第2列 -->
      <el-table-column label="日期" prop="date"></el-table-column>
      <!-- 第3列 -->
      <el-table-column label="地址" prop="address"></el-table-column>
      <!-- 第4列 -->
      <el-table-column label="性别" prop="gender">
        <template v-slot="{ row }">
          <b>{{ row.gender ? '男':'女' }}</b>
        </template>
      </el-table-column>
      <!-- 第5列 -->
      <el-table-column label="头像">
        <template v-slot="scope">
          <img width="60px" :src="scope.row.icon" alt="">
        </template>
      </el-table-column>
      <!-- 第6列 -->
      <el-table-column label="操作">
        <template v-slot="scope">
          <el-button type="danger" @click="tableData.splice( scope.$index , 1)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

  </div>
</template>

<script>
export default {
  name: 'home-page',
  data () {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          gender: 0,
          icon: 'http://s02.mifile.cn/assets/static/image/logo-mi2.png'
        },
        {
          date: '2016-05-04',
          name: '张大坤',
          address: '上海市普陀区金沙江路 1517 弄',
          gender: 1,
          icon: 'https://misc.360buyimg.com/lib/img/e/logo-201305-b.png'
        },
        {
          date: '2016-05-01',
          name: '刘文文',
          address: '上海市普陀区金沙江路 1519 弄',
          gender: 1,
          icon: 'https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'
        }
      ]
    }
  }
}
</script>

<style scoped>

.el-table{
  width: 1000px;
  margin: 50px auto;
  border: 1px solid purple;
}
</style>
