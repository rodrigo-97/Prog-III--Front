<template>
<img src="https://wallpapercave.com/wp/wp2875008.jpg" class="bg_video" />
<Menu />
<Esqueleto />
</template>

<script>
import Esqueleto from "./components/esqueleto";
import Menu from "./components/menu";
import {
  store
} from "./index";

export default {
  components: {
    Menu,
    Esqueleto,
  },

  mounted() {
    store.commit("menuOpcao", 1)
  },
};
</script>

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
