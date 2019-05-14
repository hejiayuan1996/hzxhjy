<template>
    <div>
      <h1>user</h1>
      <p>我是user{{user}}</p>
    </div>
</template>

<script>
    export default {
      name: "user",
      data() {
        return {
          user: ''
        }
      },
      watch: {
        $route (to, from) {
          // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，它们是两个对象，你可以把它打印出来，它们也有一个param 属性
          console.log(to);
          console.log(from);
          this.user = to.params.id
        }
      }
    }
</script>

<style scoped>

</style>
