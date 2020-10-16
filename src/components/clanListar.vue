<template>
  <div class="cadastro border border-4 border-primary">
    <table class="table-hover col sm-12">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(clan, index) in clans" :key="clan.id">
          <td>
            {{ clan.id }}
          </td>
          <td>
            {{ clan.nome }}
          </td>
          <td>
            <input
              type="button"
              class="btn-secondary"
              value="Atualizar"
              @click="atualizar(clan)"
            /><label
              class="paper-btn marginm margin-none"
              style="
                    background-color: #eac8c9;
                    border-color: #bc605b;
                    border-style: doted;
                  "
              @click="(this.clan.index = index), remover(clan.id, clan.nome)"
              >Excluir</label
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ClanService from "../services/clan";
import { crud } from "../Mini-controlador/controlador";
import { store } from "../index";
export default {
  data() {
    return {
      clan: {
        nome: "",
        id: "",
        index: "",
      },

      clans: [],
    };
  },

  mounted () {
    this.listar()
  },

  methods: {
    listar() {
      ClanService.list().then((response) => {
        this.clans = response.data;
      });
    },

    remover(id, nome) {
      crud.remove(id, ClanService, nome, this.clans, this.clan.index, "Clã");
    },

    atualizar (clan){
      store.commit("clanCadastro", clan)
      store.commit("menuOpcao", "3");
    }
  },
};
</script>
<style scoped></style>
