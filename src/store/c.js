export default {
    namespaced: true,
    state: {
        count: 5,
        price: 100
    },
    getters: {
        // state: 默认形参：就是当前vuex实例的state vuex中没有this
        total(state) {
            return state.count * state.price;
        }
    },
    mutations: {
        updateCount(state, payload) {
            state.count = payload;
        }
    },
    actions: {
        // context：就是vuex实例，相当于this
        setCount(context, payload) {
            // (1)异步操作
            setTimeout(() => {
                // (2)将异步操作的结果。调用commit提交mutations
                context.commit("updateCount", payload)
            }, 1000);
        }
    },
    modules: {}
}