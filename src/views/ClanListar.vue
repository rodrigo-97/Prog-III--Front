<template>
  <div
    class="listar border border-4 border-primary"
    style="background-color: white"
  >
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
              @click="(clan.index = index), remover(clan.id, clan.nome, index)"
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
import store from "../store";


export default {
  data() {
    return {
      clans: [],
    };
  },

  async mounted() {
    await this.listar();
  },

  methods: {
    async listar() {
      this.clans = await crud.list(ClanService);
    },

    remover(id, nome, index) {
      crud.remove(id, ClanService, nome, this.clans, index, "Clã");
    },

    atualizar(clan) {
      store.commit("clanCadastro", clan);
      this.$router.push({ path: "cadastrar-clan" });
    },
  },
};
</script>
<style scoped>
.listar {
  margin-top: 3rem;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
}
</style>
