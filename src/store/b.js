export default {
    namespaced: true,
    state: {
        settingInfo: {
            color: 'red',
            fontSize: '20px'
        },
    },
    getters: {},
    mutations: {
        updateSettingInof(state, payload) {
            state.settingInfo = payload;
        },
    },
    actions: {},
    modules: {}
}