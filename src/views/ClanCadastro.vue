<template>
  <div class="cadastro border border-4 border-primary">
    <form @submit.prevent="save()" method="post">
      <div class="container" style="background-color: white">
        <div class="row margin-none">
          <div class="col sm-12">
            <div class="form-group">
              <label for="nome">Nome do Clã</label>
              <input
                type="text"
                class="preencher col sm-12 margin-none"
                placeholder='Exemplo "Senju"'
                id="clan"
                maxlength="35"
                style="margin: none"
                v-model="clan.nome"
              />
            </div>
            <button
              type="submit"
              class="btn-secondary border border-3 border-primary col sm-4"
              value="Salvar"
              style="width: 50%"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import ClanService from "../services/clan";
import { crud } from "../Mini-controlador/controlador";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["clan"]),
  },

  methods: {
    save() {
      crud.insert(this.clan, ClanService, "Clã");
    },

    listar() {
      ClanService.list().then((response) => {
        this.clans = response.data;
      });
    },

    limparCampos() {
      this.clan = { nome: "", id: "" };
    },
  },

  async mounted() {
    this.listar();
  },
};
</script>

<style scoped>
.preencher {
  width: 100%;
}

.cadastro {
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  width: 6em;
  background-color: white;

  margin-bottom: 5rem;
  padding: 1rem;
  width: 60%;
  height: 50%;
}

.btn-enviar {
  display: flex;
  justify-content: flex-end;
}

.listar {
  background-color: white;
  margin-bottom: 1rem;
  padding: 1rem;
}
</style>