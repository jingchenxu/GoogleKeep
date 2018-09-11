import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tableList: [],
    listType: 'mdi-view-stream'
  },
  mutations: {
    getTableList (state, ob) {
      state.tableList = ob
    },
    changeListType (state, listType) {
      if (listType === 'mdi-view-stream') {
        state.listType = 'mdi-view-dashboard-variant'
      } else {
        state.listType = 'mdi-view-stream'
      }
    }
  },
  actions: {

  }
})
