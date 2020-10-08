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
          <li>
            <a href="#" @click="mudarMenu(1)">Cadastro</a>
          </li>
          <li><a href="#" @click="mudarMenu(2)">Listagem</a></li>
          <li><a href="#" @click="mudarMenu(3)">Usuários</a></li>
          <li><a href="#" @click="mudarMenu(0)">Clãs</a></li>
          <li><a href="#" @click="mudarMenu(0)">Sair</a></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { store } from "../index";

export default {
  name: "Menu",
  methods: {
    mudarMenu(numero) {
      store.commit("menuOpcao", numero);
    },
  },
};
</script>
