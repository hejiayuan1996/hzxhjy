<template>
  <div id="app">
    <child-component>
      <template slot="girl">
        漂亮、美丽、购物、逛街
      </template>
      <template slot="boy">
        帅气、才实
      </template>
      <div>
        我是一类人，
        我是默认的插槽
      </div>
    </child-component>
  </div>
</template>

<script>
  export default {
    name: "phone",
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>

</style>
