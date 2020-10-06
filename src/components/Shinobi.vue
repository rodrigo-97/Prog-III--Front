<template>
  <nav class="border fixed">
    <div class="nav-brand">
      <h4><a href="#">Naruto Master</a></h4>
    </div>
    <div class="collapsible">
      <input id="collapsible2" type="checkbox" name="collapsible2" />
      <label for="collapsible2">
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>
      </label>
      <div class="collapsible-body">
        <ul class="inline">
          <li><a href="#" @click="this.menu = 1">Cadastro</a></li>
          <li><a href="#" @click="this.menu = 2">Listagem</a></li>
          <li><a href="#" @click="this.menu = 3">Usuários</a></li>
          <li><a href="#" @click="this.menu = 0">Clãs</a></li>
          <li><a href="#" @click="this.menu = 0">Sair</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <div v-if="menu == 1">
    <form @submit.prevent="save()" method="post">
      <div
        class="container cadastro border border-4 border-primary"
        style="background-color:white"
      >
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
                class="fz"
                placeholder="Digite o nome do Shinobi"
                id="nome"
                v-model="this.shinobi.nome"
              />
            </div>
          </div>

          <div class="col sm-6">
            <div class="form-group">
              <label for="data">Data de Nascimento</label>
              <input
                type="date"
                class="fz"
                id="data"
                v-model="this.shinobi.dataNascimento"
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
                class="fz"
                placeholder="Digite o jutsu mais boladão do Shinobi"
                id="j-bolado"
                v-model="this.shinobi.jutsuMaisBrabo"
              />
            </div>
          </div>

          <div class="col sm-6 padding-top-none">
            <div class="form-group">
              <label for="rival-mortal">Rival Mortal</label>
              <input
                type="text"
                class="fz"
                placeholder="Qual o maior rival desse Shinobi?"
                id="rival-mortal"
                v-model="this.shinobi.rivalMortal"
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
                class="fz"
                placeholder="Como este Shinobi é conhecido?"
                id="entitulacao"
                v-model="this.shinobi.entitulacao"
              />
            </div>
          </div>

          <div class="col sm-6 padding-top-none">
            <div class="form-group">
              <label for="">Clã</label>
              <select name="cars" class="fz" v-model="this.shinobi.clan">
                <option v-bind:value="{ id: '1', nome: 'senju' }">
                  senju
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
                class="fz"
                id="n-taijutsu"
                min="0"
                max="10"
                v-model="this.shinobi.nivelTaijutsu"
              />
            </div>
          </div>

          <div class="col sm-2 padding-top-none">
            <div class="form-group">
              <label for="n-ninjutsu">Nível em Ninjutsu</label>
              <input
                type="number"
                placeholder="Digite um valor entre 0 e 10"
                class="fz"
                id="n-ninjutsu"
                min="0"
                max="10"
                v-model="this.shinobi.nivelNinjutsu"
              />
            </div>
          </div>

          <div class="col sm-2 padding-top-none">
            <div class="form-group">
              <label for="n-genjutsu">Nível em Genjutsu</label>
              <input
                type="number"
                placeholder="Digite um valor entre 0 e 10"
                class="fz"
                id="n-genjutsu"
                min="0"
                max="10"
                v-model="this.shinobi.nivelGenjutsu"
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
                  v-model="this.shinobi.morreu"
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
            type="submit"
            class="btn-secondary"
            value="Salvar"
            style="width:40%"
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
  </div>

  <div v-if="menu == 2 && this.shinobis.length > 0">
    class="border border-5 border-primary child-borders child-shadows"
    <div class="listagem">
      <table
        style="background-color:white; margin-bottom: 5rem; padding: 1rem"
        class="table-hover border border-5 border-primary"
      >
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
          <tr v-for="_shinobi in shinobis" :key="_shinobi.id">
            <td>
              {{ _shinobi.id }}
            </td>
            <td>
              {{ _shinobi.nome }}
            </td>
            <td>
              {{ _shinobi.jutsuMaisBrabo }}
            </td>
            <td>
              {{ _shinobi.dataNascimento }}
            </td>
            <td>
              {{ _shinobi.rivalMortal }}
            </td>
            <td>
              {{ _shinobi.nivelTaijutsu }}
            </td>
            <td>
              {{ _shinobi.nivelNinjutsu }}
            </td>
            <td>
              {{ _shinobi.nivelGenjutsu }}
            </td>
            <td>
              {{ _shinobi.clan.nome }}
            </td>
            <td>
              {{ _shinobi.morreu }}
            </td>
            <td>
              {{ _shinobi.entitulacao }}
            </td>
            <td>
              <input
                type="button"
                class="btn-secondary"
                value="Atualizar"
                @click="remove(_shinobi)"
              />
            </td>
            <td>
              <button class="btn-danger" @click="remove(_shinobi.id)">
                Remover
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div v-if="menu == 3">
    <div class="">
      <form @submit.prevent="save()" method="post">
        <div
          class="container cadastro border border-4 border-primary"
          style="background-color:white"
        >
          <div class="form-group">
            <label for="email">E-mail</label>
            <input
              type="email"
              class="fz"
              placeholder='Exemplo "narutim_rasengan@noveCaldas.com"'
              id="email"
            />
          </div>

          <div class="form-group">
            <label for="j-bolado">Apelido</label>
            <input
              type="text"
              class="fz"
              placeholder='Exemplo "Testa de marquize" que nem a Sakura xD'
              id="j-bolado"
            />
          </div>

          <div class="form-group">
            <label for="senha">Senha</label>
            <input
              type="password"
              class="fz"
              placeholder="Arte sábiaaaaaaa!!! Jutsu da proteção de senha \O/"
              id="senha"
            />
          </div>
          <button
            type="submit"
            class="btn-success-outline border border-3 border-primary"
            value="Salvar"
            style="width:40%"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ShinobiService from "../services/shinobi";

export default {
  name: "Shinobi",

  data() {
    return {
      idClan: "",
      nomeClan: "",
      mensagem: "",
      mensagemSucesso: "",
      erro: false,
      acerto: false,

      menu: 1,
      shinobis: [],
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
        },
      },
    };
  },

  methods: {
    save() {
      ShinobiService.insert(this.shinobi)
        .then((response) => {
          if (response.status == 200) {
            this.mensagemSucesso = "Cadastro efetuado com sucesso!";
            this.acerto = true;
          }
          console.log(response.status);
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
    },

    edit(shinobi) {
      console.log(shinobi);
    },

    remove(shinobi) {
      console.log(shinobi)
      ShinobiService.remove(shinobi)
    },
  },

  mounted() {
    ShinobiService.list().then((res) => {
      this.shinobis = res;
    });

    console.log();
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

.card {
  background-color: white;
  border-color: darkGrey;
}

.fz {
  width: 100%;
}

.cadastro {
  margin-left: auto;
  margin-right: auto;
  width: 6em;

  margin-top: 5rem;
  margin-bottom: 5rem;
  padding: 1rem;
  width: 60%;
  height: 50%;
}

.btn-enviar {
  display: flex;
  justify-content: flex-end;
}

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
}
</style>
