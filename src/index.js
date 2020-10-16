import Vuex from "vuex";

const store = new Vuex.Store({
	state: {
		menu: 1,
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
		menu: (state) => state.menu,
		shinobi: (state) => state.shinobi,
		clan: state => state.clan
	},

	mutations: {
		menuOpcao: (state, valor) => {
			state.menu = valor
		},

		shinobiCadastro: (state, shinobi) => {
			state.shinobi = shinobi
		},

		clanCadastro: (state, clan) => {
			state.clan = clan
		}
	},
});

export {
	store
};