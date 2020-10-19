/*
* @Detalhe: Faz controle de estado da aplicação
* @author: Rodrigo
*/

import Vuex from "vuex";
import Vue from "vue";
// import SessionKeystore from "session-keystore"
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
		},
		logado: true
	},


	/*
	* @detalhe: Expõe os atributos de forma global para que qualquer componente possa fazer acesso
	* 					Funciona como um get normal
	*/
	getters: {
		shinobi: state => state.shinobi,
		clan: state => state.clan,
		logado: state => state.logado
	},

	/*
	* @detalhe: Funciona como um set normal. Seta um novo valor a uma atributo global
	*/
	mutations: {
		shinobiCadastro: (state, shinobi) => {
			state.shinobi = shinobi
		},

		clanCadastro: (state, clan) => {
			state.clan = clan
		},
	},
});

export default store;