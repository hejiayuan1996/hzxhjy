<template>
  <div class="testPage_3">
    <h1>welcome to testPage_1</h1>
    <h1>'使用map辅助函数的方法访问store'</h1>
    
    <!-- <h1>{{text}}</h1> -->
    <!-- <button @click="addCount">+1</button> -->
    <!-- <input v-model="number"><button @click="addNumCount(number)">+n</button> -->
    <h1>count in mapState : {{count}}</h1>
    <h1>text in mapState : {{text}}</h1>
    <h1>getCount in mapGetters : {{getCount}}</h1>
    <h1>doneTodos in mapGetters : {{doneTodos}}</h1>
    <button @click="isShow">isShow</button>  <span v-if = 'this.$store.state.isShow'>isShow in actions ?</span>
    <h1>number : {{number}}</h1>
 
 
  </div>
</template>
 
<script>
import { mapState , mapGetters , mapActions} from 'vuex'  //必须引入
export default {
  name: 'testPage_3',
  data () {
    return {
      number:24,
    }
  },
  // ...mapState({   //使用...对象展开运算符
  //     count:state => state.count,
  //     text:state => state.text
  //   }),
  computed:{  
    ...mapState([       //更简便的方法，注意这里的'[]'，映射的计算属性的名称与 state 的子节点名称相同时，映射 this.count 为 store.state.count
     'count','text'
    ]),
    ...mapGetters([ //使用...对象展开运算符
      'getCount','doneTodos'
    ])
  },
  methods: {
    ...mapActions([//与vuex中的actions关联
      'isShow'
    ])
  }
}
</script>