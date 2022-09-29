import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import {onLogin} from '../request/login'
import {setToken,getToken,setUserInfor,getUserInfor} from '../utilityStorage'
export default new Vuex.Store({
  state: {
    token:getToken()||'',
    infor:getUserInfor() || {}
  },
  getters: {
  },
  mutations: {
    setUserToken(state,token){
      state.token=token
      setToken(token)
    }
  },
  actions: {
    async getUserToken({commit},data){
       try {
        let res = await onLogin(data)
        commit('setUserToken',res.data.token)
        return res.data.token
       } catch (error) {
        
       }
    },
  },
  modules: {
  }
})
