<template>
  <div v-if="menu == 1">
    <ShinobiCadastro />
  </div>
  <div v-if="menu == 2">
    <ShinobiListar />
  </div>

  <div v-if="menu == 3">
    <div class="">
      <form @submit.prevent="save()" method="post">
        <div
          class="container cadastro border border-4 border-primary"
          style="background-color: white"
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
            style="width: 40%"
          >
            Salvar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShinobiListar from "./shinobiListar";
import ShinobiCadastro from "./shinobiCadastro";

export default {
  name: "Esqueleto",

  computed: {
    ...mapGetters(["menu", "mErro", "mSucesso"]),
  },

  components: {
    ShinobiListar,
    ShinobiCadastro
  },
};
</script>