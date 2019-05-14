<template>
  <div>
    <h1 @click="zz" ref="tit">{{title}}</h1>
    <child @getS="show"></child>
  </div>
</template>

<script>
  import Child from '../components/son'
  export default {
    components: {Child},
    data() {
      return {
        title:''
      }
    },
    methods:{
      show(title){
        this.title = title;
        console.log(title)
      },
      zz() {
        console.log(this.$refs.tit)
      }
    }
  }
</script>

<style scoped>

</style>
