<template>
  <ul class="h-menu menu">
    <li><a href="#" @click="menu = 1">Cadastro</a></li>
    <li><a href="#" @click="menu = 2">Listagem</a></li>
    <li><a href="#" @click="menu = 3">Usuários</a></li>
    <li><a href="#" @click="menu = 0">Ver o plano de fundo</a></li>
    <li><a href="#" @click="menu = 0">Sair</a></li>
  </ul>
  <transition :name="slide - fade">
    <div v-if="menu == 1">
      <div
        class="cell-8 border  p-5 menu pos-fixed pos-center "
        data-role="panel"
        data-width="1200px"
        data-height="600px"
      >
        <form>
          <div class="form-group">
            <label>Nome do Shinobi</label>
            <input type="text" placeholder="Digite o nome do Shinobi" />
          </div>

          <div class="form-group">
            <label>Selecione o clã do Shinobi</label>
            <select type="text" placeholder="Digite o jutsu mais bolado dele" />
          </div>

          <div class="form-group">
            <label>Jutsu mais boladão</label>
            <input type="text" placeholder="Digite o jutsu mais bolado dele" />
          </div>

          <div class="form-group">
            <label>Entitulação</label>
            <input type="text" placeholder="Entitulação do Shinobi" />
          </div>

          <div class="form-group">
            <label>Rival mortal</label>
            <input type="text" placeholder="Qual o seu maior rival?" />
          </div>

          <div class="form-group">
            <label>Data de nascimento</label>
            <input class="cell-4 p-0" data-role="datepicker"  data-min-year="1800" data-max-year="2020">
          </div>

          <div class="form-group">
            <label>Elementos do Chackra</label> <br />
            <input type="checkbox" data-role="checkbox" data-caption="Água" />
            <input type="checkbox" data-role="checkbox" data-caption="Terra" />
            <input type="checkbox" data-role="checkbox" data-caption="Fogo" />
          </div>

          <div class="form-group">
            <input
              data-role="rating"
              data-star-color="#a51d38"
              data-message="Nível em Ninjutsu"
              data-stared-color="#a51d38"
            />
          </div>

          <div class="form-group">
            <input
              data-role="rating"
              data-star-color="#a51d38"
              data-message="Nível em Taijutsu"
              data-stared-color="#a51d38"
            />
          </div>

          <div class="form-group">
            <input
              data-role="rating"
              data-star-color="#a51d38"
              data-message="Nível em Genjutsu"
              data-stared-color="#a51d38"
            />
          </div>

          <div class="form-group">
            <input
              type="checkbox"
              data-role="checkbox"
              data-caption="Já morreu?"
            />
          </div>

          <div class="form-group m-0 mt-10">
            <button class="button success">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </transition>

  <div v-if="menu == 2">
    <div
      class="cell-8 border  p-5 menu pos-fixed pos-center "
      data-role="panel"
      data-width="1200px"
      data-height="600px"
    >
    Aqui vai tabela de shinobis
    </div>
  </div>

  <div v-if="menu == 3">
    <div
      class="cell-8 border  p-5 menu pos-fixed pos-center "
      data-role="panel"
      data-width="1200px"
      data-height="600px"
    >
    Aqui vai o cadastro e listagem de usuários
    </div>
  </div>
</template>

<script>
// import Metro from '../assets/metro.min.js'

export default {
  name: "Shinobi",
  data() {
    return {
      itens: ["Shinobi", "Usuarios", "Sair"],
      menu: 1,
    };
  },

  // methods: {

  // },
};
</script>

<style scoped>
.menu {
  background-color: #3b2533;
  color: white;
}
</style>
