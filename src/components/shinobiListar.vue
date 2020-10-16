<template>
  <div>
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
                  for="clan-1"
                  @click="remove(shinobi.id, shinobi.nome, index)"
                  >Excluir</label
                >
              </div>
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
import { crud } from "../Mini-controlador/controlador";
export default {
  name: "ShinobiListar",

  data() {
    return {
      clan: {
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
      this.shinobis = response.data;
    });
  },

  methods: {
    remove(id, nome, index) {
      crud.remove(id, ShinobiService, nome, this.shinobis, index, "Shinobi");
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
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
