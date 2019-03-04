import Vue from 'vue'
import Vuex from 'vuex'

import example from './module-example'
import catalog from './catalog'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation
 */
const store = new Vuex.Store({
  modules: {
    example,
    catalog
  }
})

export default store
