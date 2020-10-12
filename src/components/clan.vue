<template>
  <div class="cadastro border border-4 border-primary">
    <div class="col sm-12" id="status">
      <div class="alert alert-danger" v-if="erro == true">
        {{ mensagemErro }}
      </div>
      <div class="alert alert-success" v-if="acerto == true">
        {{ mensagemSucesso }}
      </div>
    </div>
    <div>
      <div>
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
                    v-model="this.clan.nome"
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
      <div>
        <table class="table-hover col sm-12">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="clan in clans" :key="clan.id">
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
                  @click="this.clan = clan"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import ClanService from "../services/clan";
import { crud } from "../Interfaces/crud";

import { mapGetters } from "vuex"
export default {
  data() {
    return {
      clan: {
        nome: "",
        id: "",
      },

      clans: mapGetters["menu"],
      mensagemErro: "",
      mensagemSucesso: "",
      acerto: false,
      erro: false,
    };
  },

  methods: {
    save() {
      crud.insert(this.clan, ClanService)
      .then(()=>{
       this.listar()

      })
    },

    listar() {
      ClanService.list().then((response) => {
        this.clans = response.data;
      });
    },
  },

  mounted() {
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
  width: 6em;
  background-color: white;

  margin-top: 3rem;
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