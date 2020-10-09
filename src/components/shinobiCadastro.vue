<template>
  <form @submit.prevent="save()" method="post">
    <div class="container cadastro border border-4 border-primary">
      <div class="col sm-12" id="status">
        <div class="alert alert-danger" v-if="erro == true">
          {{ mensagemErro }}
        </div>
        <div class="alert alert-success" v-if="acerto == true">
          {{ mensagemSucesso }}
        </div>
      </div>
      <div class="row margin-none">
        <div class="col sm-6">
          <div class="form-group">
            <label for="nome">Nome</label>
            <input
              type="text"
              class="preencher"
              placeholder="Digite o nome do Shinobi"
              id="nome"
              v-model="shinobi.nome"
            />
          </div>
        </div>

        <div class="col sm-6">
          <div class="form-group">
            <label for="data">Data de Nascimento</label>
            <input
              type="date"
              class="preencher"
              id="data"
              v-model="shinobi.dataNascimento"
            />
          </div>
        </div>
      </div>

      <div class="row margin-none">
        <div class="col sm-6 padding-top-none">
          <div class="form-group">
            <label for="j-bolado">Jutsu mais Brabo</label>
            <input
              type="text"
              class="preencher"
              placeholder="Digite o jutsu mais boladão do Shinobi"
              id="j-bolado"
              v-model="shinobi.jutsuMaisBrabo"
            />
          </div>
        </div>

        <div class="col sm-6 padding-top-none">
          <div class="form-group">
            <label for="rival-mortal">Rival Mortal</label>
            <input
              type="text"
              class="preencher"
              placeholder="Qual o maior rival desse Shinobi?"
              id="rival-mortal"
              v-model="shinobi.rivalMortal"
            />
          </div>
        </div>
      </div>

      <div class="row margin-none">
        <div class="col sm-6 padding-top-none">
          <div class="form-group">
            <label for="entitulacao">Entitulação</label>
            <input
              type="text"
              class="preencher"
              placeholder="Como este Shinobi é conhecido?"
              id="entitulacao"
              v-model="shinobi.entitulacao"
            />
          </div>
        </div>

        <div class="col sm-6 padding-top-none">
          <div class="form-group">
            <label for="">Clã</label>
            <select name="clans" class="preencher" v-model="shinobi.clan">
              <option v-for="clan in clans" :key="clan.id"  v-bind:value="{nome: clan.nome, id: clan.id}">
                {{ clan.nome }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="row margin-none">
        <div class="col sm-2 padding-top-none">
          <div class="form-group">
            <label for="n-taijutsu">Nível em Taijutsu</label>
            <input
              type="number"
              placeholder="Digite um valor entre 0 e 10"
              class="preencher"
              id="n-taijutsu"
              min="0"
              max="10"
              v-model="shinobi.nivelTaijutsu"
            />
          </div>
        </div>

        <div class="col sm-2 padding-top-none">
          <div class="form-group">
            <label for="n-ninjutsu">Nível em Ninjutsu</label>
            <input
              type="number"
              placeholder="Digite um valor entre 0 e 10"
              class="preencher"
              id="n-ninjutsu"
              min="0"
              max="10"
              v-model="shinobi.nivelNinjutsu"
            />
          </div>
        </div>

        <div class="col sm-2 padding-top-none">
          <div class="form-group">
            <label for="n-genjutsu">Nível em Genjutsu</label>
            <input
              type="number"
              placeholder="Digite um valor entre 0 e 10"
              class="preencher"
              id="n-genjutsu"
              min="0"
              max="10"
              v-model="shinobi.nivelGenjutsu"
            />
          </div>
        </div>

        <div class="col sm-6 padding-top-none">
          <fieldset class="form-group margin-none">
            <p class="margin-top-none">Está Morto?</p>
            <label for="paperSwitch2" class="paper-switch-tile">
              <input
                id="paperSwitch2"
                name="paperSwitch2"
                type="checkbox"
                v-model="shinobi.morreu"
              />
              <div class="paper-switch-tile-card border">
                <div
                  class="paper-switch-tile-card-front border background-secondary"
                >
                  Vivão :D
                </div>
                <div
                  class="paper-switch-tile-card-back border background-danger"
                >
                  Sim :'C
                </div>
              </div>
            </label>
          </fieldset>
        </div>
      </div>

      <div class="btn-enviar">
        <button
          type="button"
          class="paper-btn btn-primary-outline"
          value="Salvar"
          style="width: 20%"
          @click="limparCampos()"
        >
          <label
            for="modal-1"
            class="paper-btn margin"
            style="display: none"
          ></label>
          Limpar Campos
        </button>
        <button
          type="submit"
          class="btn-secondary"
          value="Salvar"
          style="width: 40%"
        >
          <label
            for="modal-1"
            class="paper-btn margin"
            style="display: none"
          ></label>
          Salvar
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { store } from "../index";
import ShinobiService from "../services/shinobi";
import ClanService from "../services/clan";

export default {
  name: "ShinobiCadastro",

  computed: {
    ...mapGetters(["shinobi"]),
    ...mapMutations(["shinobiCadastro"]),
  },

  data() {
    return {
      mensagemErro: "",
      mensagemSucesso: "",
      erro: false,
      acerto: false,
      clans: [],
    };
  },

  mounted() {
    ClanService.list().then((response) => {
      this.clans = response.data;
    });
  },

  methods: {
    limparCampos() {
      const shinobi = {
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
        },
      };

      store.commit("shinobiCadastro", shinobi);
    },

    save() {
      if (this.shinobi.id == "") {
        console.log(this.shinobi.clan.id)
        ShinobiService.insert(this.shinobi)
          .then((response) => {
            if (response.status == 200) {
              this.mensagemSucesso = "Cadastro efetuado com sucesso!";
              this.acerto = true;
              this.limparCampos();
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
        ShinobiService.update(this.shinobi).then((response) => {
          if (response.status == 200) {
            this.mensagemSucesso = "Cadastro alterado com sucesso, DATEBAYO!";
            this.acerto = true;
            this.limparCampos();

            setTimeout(() => {
              this.acerto = false;
            }, 10000);
          }
        });
      }
    },
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
  margin-bottom: 1rem;
  padding: 1rem;
  width: 60%;
}

.btn-enviar {
  display: flex;
  justify-content: flex-end;
}
</style>
