<template>
  <img src="https://wallpapercave.com/wp/wp2875008.jpg" class="bg_video" />
  <Shinobi />
</template>

<script>
import Shinobi from "./components/Shinobi";

export default {
  components: {
		Shinobi,
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
