
<template>
  <div id="app">
    <header>
      <router-link to="/home">home</router-link>
      <router-link to="/index">index</router-link>
      <router-link to="/user/123">user1</router-link>
      <router-link to="/slo">slo</router-link>
      <router-link :to="{ name: 'user', params: { id: 456 }}">user2</router-link>
    </header>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
