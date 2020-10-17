import Vuex from "vuex";
import Vue from "vue"
Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		shinobi: {
			id: "",
			nome: "",
			jutsuMaisBrabo: "",
			dataNascimento: "",
			rivalMortal: "",
			nivelNinjutsu: 0,
			nivelTaijutsu: 0,
			nivelGenjutsu: 0,
			morreu: "",
			entitulacao: "",
			clan: {
			}
		},
		clan: {
			id: "",
			nome: "",
			index: ""
		}
	},

	getters: {
		shinobi: (state) => state.shinobi,
		clan: state => state.clan
	},

	mutations: {
		shinobiCadastro: (state, shinobi) => {
			state.shinobi = shinobi
		},

		clanCadastro: (state, clan) => {
			state.clan = clan
		}
	},
});

export default store;