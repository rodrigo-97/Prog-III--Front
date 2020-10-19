<template>
  <div class="listagem border border-3 border-primary">
    <table class="table-hover listar">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(shinobi, index) in shinobis" :key="shinobi.id">
          <td>
            {{ shinobi.nome }}
          </td>
          <td>
            <input
              type="button"
              class="btn-success"
              value="Ficha Shinobi"
              @click="fichaShinobi(shinobi)"
            />

            <input
              type="button"
              class="btn-secondary"
              value="Atualizar"
              @click="edit(shinobi)"
            />

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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ShinobiService from "../services/shinobi";
import store from "../store";
import { crud } from "../Mini-controlador/controlador";
import Swal from "sweetalert2";
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
      this.$router.push({ path: "/cadastrar-shinobi" });
    },

    fichaShinobi(shinobi) {
      const botaoDiferente = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
      botaoDiferente.fire({
        title: "Ficha do Shinobi " + shinobi.nome + "",
        html: `
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <td> ${shinobi.id}</td>
                </tr>
                <tr>
                  <th>Nome 🤫</th>
                  <td> ${shinobi.nome}</td>
                </tr>
                <tr>
                  <th>Jutsu mais brabo 🙅‍♂️</th>
                  <td> ${shinobi.jutsuMaisBrabo}</td>
                </tr>
                <tr>
                  <th>Data de Nascimento 👶</th>
                  <td> ${shinobi.dataNascimento}</td>
                </tr>
                <tr>
                  <th>Morto? 👻</th>
                  <td> ${shinobi.morreu}</td>
                </tr>
                <tr>
                  <th>Entitulação 🥇</th>
                  <td> ${shinobi.entitulacao}</td>
                </tr>
                <tr>
                  <th>Rival Mortal 👥</th>
                  <td> ${shinobi.rivalMortal}</td>
                </tr>
                <tr>
                  <th>Nível em Ninjutsu 💥</th>
                  <td> ${shinobi.nivelNinjutsu}</td>
                </tr>
                <tr>
                  <th>Nível em Taijutsu 👊🤜</th>
                  <td> ${shinobi.nivelTaijutsu}</td>
                </tr>
                <tr>
                  <th>Nível Genjutsu 😵🥴</th>
                  <td> ${shinobi.nivelGenjutsu}</td>
                </tr>
                <tr>
                  <th>Clã 📜</th>
                  <td> ${shinobi.clan.nome}</td>
                </tr>
              </thead>
            </table>
          </div>
          `,
        confirmButtonText: "Beleza 👍",
        confirmButtonAriaLabel: "Thumbs up, great!",
        cancelButtonAriaLabel: "Thumbs down",
      });
    },
  },
};
</script>

<style scoped>
.listagem {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  background-color: white;

  margin-bottom: 1rem;
  padding: 1rem;
  width: 50%;
}

.listar {
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>
