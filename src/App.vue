<template>
  <div id="app">
    <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/29d777b5-d377-416d-ad40-ee14bcfbe77c/d6t4ryw-46e57c5a-f36b-45ce-8004-74462a2487b8.jpg/v1/fill/w_1024,h_574,q_75,strp/naruto_manga_wallpaper_by_darkpain27_d6t4ryw-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3siaGVpZ2h0IjoiPD01NzQiLCJwYXRoIjoiXC9mXC8yOWQ3NzdiNS1kMzc3LTQxNmQtYWQ0MC1lZTE0YmNmYmU3N2NcL2Q2dDRyeXctNDZlNTdjNWEtZjM2Yi00NWNlLTgwMDQtNzQ0NjJhMjQ4N2I4LmpwZyIsIndpZHRoIjoiPD0xMDI0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.ZSiUt2lEp8oY_ofAUGzV1wQwq6BqsBaGbOhX_H7sUl4" class="bg_video" />
    <div id="nav" class="border border-2">
      <button class="btn-small" @click="navegar('/cadastrar-shinobi')">💾 Cadastrar Shinobi</button>
      <button class="btn-small" @click="navegar('/listar-shinobis')">📑 Listar Shinobi</button>
      <button class="btn-small" @click="navegar('/cadastrar-clan')">💾Cadastrar Clan</button>
      <button class="btn-small" @click="navegar('/listar-clans')"> 📑Listar Clãs</button>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods: {
    navegar(rota){
      if (rota != this.$router.history.current.path){
        this.$router.push({ path: rota});
      }
    }
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding-top: 30px;
  display: flex;
  justify-content: center;
  background-color:white;
  padding-bottom:20px;
    text-decoration:none;

}

#nav a {
  font-weight: bold;
  color: #2c3e50;
    text-decoration:none;

}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav-item {
  padding-left: 2.5rem;
}

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

*{
  text-decoration: red
}
</style>
