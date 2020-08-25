import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {  
        //存放存储在Vuex里的值
        name: '我是vuex',
        age: '1111',
        //数组
        users: [
            { name: 'tom', addr: 'usa' },
            { name: 'jim', addr: 'chn' },
            { name: 'tim', addr: 'kor' }
        ]
    },
    mutations: {  //主要存放改变state值逻辑函数，在actions里调用
        //1.改变state
        editor(state, data) {
            state.name = data
        },
        //2.增添数组
        add(state, data) {
            state.users.push(data)
        },
        //3.移除数组
        del(state, i) {
            state.users.splice(i, 1)
        }
    },
    actions: {  //异步操作，提交的是 mutation，而不是直接变更状态。
        //1.改变state(写法1)
        increment({ commit }, data) {
            commit('editor', data)  //调用mutations里面函数
        },
        //1.改变state(写法2)
        increment(context) {
            context.commit('editor')
        },
        //2.增添数组
        addUser({ commit }, data) {
            commit('add', data)   //调用mutations里面函数
        },
        //3.移除数组
        delUser({ commit }, i) {
            commit('del', i)   // //调用mutations里面函数
        }

    },
    // 可以认为是 store 的计算属性
    getters: {
        allUsers(state) {
            return state.users
        }
    }
})

export default store