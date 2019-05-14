<template>
    <div>
      <h1>home</h1>
      <p>
        <router-link to="/home/phone">手机</router-link>
        <router-link to="/home/tablt">平板</router-link>
        <router-link to="/home/computer">电脑</router-link>
      </p>
      <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: "home",
        data () {
          return  {
            msg:'我是home'
          }
        }
    }
</script>

<style scoped>

</style>
