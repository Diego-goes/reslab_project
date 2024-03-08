// store.js
import { createStore } from 'vuex';

const moduloA = {
  state() {
    return {
      meuObjeto: {} // Seu objeto será armazenado aqui
    };
  },
  mutations: {
    atualizarObjeto(state, novoObjeto) {
      state.meuObjeto = novoObjeto;
    }
  }
}
const store = createStore({
    modules: {
        moduloA,
    }
})

export default store;
