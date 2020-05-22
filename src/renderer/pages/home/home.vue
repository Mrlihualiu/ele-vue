<template>
  <div>
    <el-button type="success" icon="el-icon-search" round>搜索</el-button>
    <el-button @click="toAboutPage">关于</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  methods: {
    toAboutPage () {
      this.$router.push('/about')
    }
  }
}
</script>