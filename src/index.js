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
                id: "",
            }
        },
    },

    getters: {
        menu: (state) => state.menu,
        shinobi: (state) => state.shinobi
    },

    mutations: {
        mensagemErro(state, valor) {
            state.mensagemErro = valor;
        },

        mensagemSucesso: (state, valor) => {
            state.mensagemSucesso = valor;
        },

        menuOpcao: (state, valor) => {
            state.menu = valor
        },

        shinobiCadastro: (state, shinobi) => {
            state.shinobi = shinobi
        }
    },
});

export {
    store
};