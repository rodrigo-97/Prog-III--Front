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
    <form @submit.prevent="save()" method="post">
      <div class="container" style="background-color: white">
        <div class="row margin-none">
          <div class="col sm-6">
            <div class="form-group">
              <label for="nome">Nome do Clã</label>
              <input
                type="text"
                class="preencher"
                placeholder='Exemplo "Senju"'
                id="clan"
                maxlength="35"
                v-model="this.clan.nome"
              />
            </div>
          </div>
          <button
            type="submit"
            class="btn-secondary border border-3 border-primary"
            value="Salvar"
            style="width: 25%"
          >
            Salvar
          </button>
          <button
            type="button"
            class="paper-btn btn-primary-outline border border-1"
            value="Salvar"
            style="width: 25%"
          >
            Limpar campo
          </button>
        </div>
      </div>
    </form>

    <table class="table-hover border border-5 border-primary padding-none">
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
</template>

<script>
import ClanService from "../services/clan";
export default {
  data() {
    return {
      clan: {
        nome: "",
        id: "",
      },

      clans: [],
      mensagemErro: "",
      mensagemSucesso: "",
      acerto: false,
      erro: false,
    };
  },

  methods: {
    save() {
      if (this.clan.id == "") {
        ClanService.insert(this.clan)
          .then((response) => {
            if (response.status == 200) {
              this.listar();
              this.mensagemSucesso = "Cadastro efetuado com sucesso!";
              this.acerto = true;
            }
            setTimeout(() => {
              this.acerto = false;
            }, 10000);
          })
          .catch((error) => {
            this.mensagemErro = error.response.data.message;
            this.erro = true;
            setTimeout(() => {
              this.erro = false;
            }, 10000);
          });
      } else {
        ClanService.update(this.clan).then((response) => {
          if (response.status == 200) {
            this.mensagemSucesso = "Cadastro alterado com sucesso, DATEBAYO!";
            this.acerto = true;

            setTimeout(() => {
              this.acerto = false;
            }, 10000);
          }
        });
      }
      this.limparCampos();
    },

    listar() {
      ClanService.list().then((response) => {
        this.clans = response.data;
      });
    },

    limparCampos() {
      this.clan = {};
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