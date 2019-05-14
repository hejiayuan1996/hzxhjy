<template>
  <h3 @click="getS">wo shi zi </h3>
</template>
<script>
  export default {
    data(){
      return {
        chid:'zzzz'
      }
    },
    methods:{
      getS(){
        this.$emit('getS',this.chid)
      }
    }
  }
</script>
