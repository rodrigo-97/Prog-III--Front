<template>
  <div id="app">
    <img
      src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29d777b5-d377-416d-ad40-ee14bcfbe77c/d6t4ryw-46e57c5a-f36b-45ce-8004-74462a2487b8.jpg/v1/fill/w_1024,h_574,q_75,strp/naruto_manga_wallpaper_by_darkpain27_d6t4ryw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzQiLCJwYXRoIjoiXC9mXC8yOWQ3NzdiNS1kMzc3LTQxNmQtYWQ0MC1lZTE0YmNmYmU3N2NcL2Q2dDRyeXctNDZlNTdjNWEtZjM2Yi00NWNlLTgwMDQtNzQ0NjJhMjQ4N2I4LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZSiUt2lEp8oY_ofAUGzV1wQwq6BqsBaGbOhX_H7sUl4"
      class="bg_video"
    />
    <nav class="border fixed" v-if="rotaAtual() != '/'">
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
              <router-link to="cadastrar-shinobi"
                >Cadastrar Shinobi</router-link
              >
            </li>
            <li>
              <router-link to="listar-shinobis">Listar Shinobis</router-link>
            </li>
            <li>
              <router-link to="cadastrar-clan">Cadastrar Clã</router-link>
            </li>
            <li><router-link to="listar-clans">Listar Clãs</router-link></li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>
<style>
.bg_video {
  position: fixed;
  right: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1000;
  background-size: contain;
  filter: blur(2.5px);
}
</style>

<script>
export default {
  methods: {
    rotaAtual() {
      return this.$router.history.current.path
    },
  },

  mounted() {
    this.rotaAtual()
  }
};
</script>
