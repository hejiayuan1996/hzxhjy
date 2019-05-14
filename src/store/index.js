import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    // state: {
    //     products:[
    //         {name:'apple', price: '1'},
    //         {name:'banana', price: '2'},
    //         {name:'pear', price: '3'},
    //         {name:'melon', price: '4'},
    //     ]
    // },
    // getters:{
    //     changeProduct:(state) =>{
    //         return state.products.map(val =>{
    //             return {
    //                 name:'**' + val.name + '--',
    //                 price:val.price * 2
    //             }
    //         })
    //         return state.products
    //     }
    // },
    // mutations:{
    //     depecPrice(state){
    //         state.products.forEach(val =>{
    //             val.price -= 1;
    //         })
    //     },
    //     addPrice(state){
    //         state.products.forEach(val =>{
    //             val.price += 1;
    //         })
    //     }
    // },
    // actions:{
    //     depecPriceAction(context){
    //         setInterval(()=>{
    //             context.commit('depecPrice')
    //         },200)
    //     },
    //     addPriceAction(context){
    //         setInterval(()=>{
    //             context.commit('addPrice')
    //         },200)
    //     },
    // }
    // 在state中去声明全局变量，可以通过 this.$store.state 访问
    state:{
        count:10,
        text:'text',
        isShow:false,
        todos:[
            {id:1,text:'id = 1,done = true',done:true},
            {id:2,text:'id = 2,done = false',done:false}
        ]
    },
    // 在getters中声明state中变量的计算函数，缓存计算后的数据， 通过 this.$store.getters 调用
    getters:{
        getCount:state =>{
            return state.count;
        },
        doneTodos:state =>{ //返回经过过滤处理的函数
            return state.todos.filter(todo => todo.done)
        },
        getTodoById:(state)=>(id)=>{//根据参数传入数据
            return state.todos.find(todo => todo.id === id)
        }
    },
    // 只能执行同步方法，不要去执行异步方法 通过 this.$store.commit 方法去调用
    mutations:{
        //改变state状态的方法，不建议直接通过
        //this.$store.state.? = ? 的方式改变state中的状态
        addCount: state =>{
            state.count ++;
        },
        //mutation的第一个参数即为state对象，并且可以向mutation传入额外参数
        addNumCount:(state,n) =>{
            state.count += n;
        },
        isShow:state => {
            state.isShow = !state.isShow;
        }
    },
    // 借助actions的手去 执行 mutations ， 通过  this.$store.dispatch 的方式调用
    // 可以用来执行异步操作，可以跟踪异步数据状态变化
    actions: {
      addCount:context=>{
          context.commit('addCount')
      },
      addNumCount:(context,n)=>{
          context.commit('addNumCount',n)
      },
      isShow:context =>{
          context.commit('isShow')
      }  
    },
    modules:{
        modB:{
            namespaced:true,
            state:{
                numInMod:333,
                textInMod:'textInModles',
                list:[1,2,3]
            },
            getters:{
                getList:state=>{
                    return state.list
                }
            },
            mutations:{
                pushList:(state,items) =>{
                    state.list.push(items)
                }
            },
            actions:{
                pushList:(context,item) =>{
                    context.commit('pushList',item)
                }
            }
        },  
        modA:{
            namespaced:true,
            state:{
                numInMod:444,
                textInMod:'HelloWorld',
                list:['He','LLo']
            },
            getters:{
                getList:state=>{
                    return state.list
                }
            },
            mutations:{
                pushList:(state,items) =>{
                    state.list.push(items)
                }
            },
            actions:{
                pushList:(context,item) =>{
                    context.commit('pushList',item)
                }
            }
        }
    }
})