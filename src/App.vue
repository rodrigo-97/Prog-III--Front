<template>
  <div class="img">
    <img src="./images/1.jpg" class="bg_video">
    <Shinobi />
  </div>
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
.bg_video{
	position: fixed; 
	right: 0; 
	bottom: 0;
	min-width: 100%; 
	min-height: 100%;
	width: auto; 
	height: auto; 
	z-index: -1000;
	background-size: cover; 
  filter: blur(0px);
}
</style>
