export default {
    namespaced: true,
    // 1.state:负责存储数据
    state: {
        userInfo: {
            name: 'ikun',
            age: 30
        },
    },
    // 2.getters：state的计算属性
    getters: {},
    // 3.mutations：修改state数据
    mutations: {
        updateUserInof(state, payload) {
            console.log(payload)
            state.userInfo = payload;
        },
    },
    // 4.异步操作
    actions: {},
    modules: {}
}