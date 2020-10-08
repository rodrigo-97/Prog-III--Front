<template>
  <div>
    <div class="row flex-spaces child-borders" style="display: none">
      <label class="paper-btn margin" for="modal-1">Excluir</label>
    </div>
    <input class="modal-state" id="modal-1" type="checkbox" />
    <div class="modal" style="width: 100%; height: 100%">
      <label class="modal-bg" for="modal-1"></label>
      <div class="modal-body">
        <label class="btn-close" for="modal-1">X</label>
        <h4 class="modal-title">Confirmar Exclusão</h4>
        <h5 class="modal-subtitle">
          {{ modal.nome }} ({{ modal.entitulacao }})
        </h5>
        <p class="modal-text">
          Você tem absoluta certa que deseja remover o shinobi deste incrível
          sistema?
        </p>
        <label for="modal-1" class="modal-link" @click="remove(modal.id)"
          >Sim</label
        >
      </div>
    </div>
    <div class="listagem">
      <table class="table-hover border border-5 border-primary listar">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Jutsu Mais Boladão</th>
            <th>Data de Nascimento</th>
            <th>Rival Mortal</th>
            <th>Nível em Taijutsu</th>
            <th>Nível em Ninjutsu</th>
            <th>Nível em Genjutsu</th>
            <th>Clã</th>
            <th>Morreu</th>
            <th>Entitulação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(shinobi, index) in shinobis" :key="shinobi.id">
            <td>
              {{ shinobi.id }}
            </td>
            <td>
              {{ shinobi.nome }}
            </td>
            <td>
              {{ shinobi.jutsuMaisBrabo }}
            </td>
            <td>
              {{ shinobi.dataNascimento }}
            </td>
            <td>
              {{ shinobi.rivalMortal }}
            </td>
            <td>
              {{ shinobi.nivelTaijutsu }}
            </td>
            <td>
              {{ shinobi.nivelNinjutsu }}
            </td>
            <td>
              {{ shinobi.nivelGenjutsu }}
            </td>
            <td>
              {{ shinobi.clan.nome }}
            </td>
            <td>
              {{ shinobi.morreu }}
            </td>
            <td>
              {{ shinobi.entitulacao }}
            </td>
            <td>
              <input
                type="button"
                class="btn-secondary"
                value="Atualizar"
                @click="edit(shinobi)"
              />
            </td>
            <td>
              <div class="row flex-spaces child-borders">
                <label
                  class="paper-btn marginm margin-none"
                  style="
                    background-color: #eac8c9;
                    border-color: #bc605b;
                    border-style: doted;
                  "
                  for="modal-1"
                  @click="
                    (modal.nome = shinobi.nome),
                      (modal.id = shinobi.id),
                      (modal.index = index),
                      (modal.entitulacao = shinobi.entitulacao)
                  "
                  >Excluir</label
                >
              </div>
              <input class="modal-state" id="modal-1" type="checkbox" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import ShinobiService from "../services/shinobi";
import { store } from "../index";
export default {
  name: "ShinobiListar",

  data() {
    return {
      modal: {
        nome: "",
        id: "",
        index: "",
        entitulacao: "",
      },

      shinobis: [],
    };
  },

  mounted() {
    ShinobiService.list().then((response) => {
      this.shinobis = response;
    });
  },

  methods: {
    remove(shinobi) {
      ShinobiService.remove(shinobi).then(() => {
        this.shinobis.splice(this.modal.index, 1);
        console.log(this.shinobis);
        console.log(this.modal.index);
      });
    },

    edit(shinobi) {
      store.commit("shinobiCadastro", shinobi);
      store.commit("menuOpcao", "1");
    },
  },
};
</script>

<style scoped>
.listagem {
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);

  width: 80%;
  height: 80%;
  border-radius: 0.3rem;
}

.listar {
  background-color: white;
  margin-bottom: 5rem;
  padding: 1rem;
}
</style>
