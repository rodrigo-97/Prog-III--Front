<template>
  <!-- Tela de cadastro de Shinobi -->
  <div v-if="menu == 1">
    <ShinobiCadastro />
  </div>

  <!-- Tela de listagem de Shinobi -->
  <div v-if="menu == 2">
    <ShinobiListar />
  </div>

  <!-- Tela de cadastro e listagem de usuários -->
  <div v-if="menu == 3">
    <Usuario />
  </div>

  <!-- Tela de cadastro e listagem de Clãs -->
  <div v-if="menu == 4">
    <Clan />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ShinobiListar from "../components/shinobiListar";
import ShinobiCadastro from "../components/shinobiCadastro.vue";
import Usuario from "../components/usuario.vue";
import Clan from "../components/clan.vue";

export default {
  name: "Esqueleto",

  computed: {
    ...mapGetters(["menu"]),
  },

  components: {
    ShinobiListar,
    ShinobiCadastro,
    Usuario,
    Clan
  },
};

</script>