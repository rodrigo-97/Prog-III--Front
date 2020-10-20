<template>
  <form>
    <fieldset class="border border-5">
      <h1>Login</h1>
      <div class="form-group row margin-none">
        <label>Usuário</label>
        <input
          class="form-control ls-login-bg-user input-lg col sm-12"
          type="text"
          placeholder="Usuário"
        />
      </div>

      <div class="form-group row margin-none" style="margin-top: 15px">
        <label>Senha</label>
        <input
          class="form-control ls-login-bg-password input-lg col sm-12"
          type="password"
          placeholder="Senha"
        />
      </div>
      <button
        type="submit"
        class="btn-secondary border border-3 border-primary fz"
        style="margin-top: 10px"
      >
        Entrar
      </button>
    </fieldset>
  </form>
</template>

<script>
export default {
  methods: {
    logar (username, senha){
      username, senha
    }
  }
}
</script>

<style scoped>
fieldset {
  background-color: white;
  height: 500px;

  width: 400px;
  margin: 5% auto 10% auto;

  flex-direction: column;

  left: 50%;
  top: 50%;
  margin-left: -225px; /* Metade do valor da Largura */
  margin-top: -300px; /* Metade da valor da Altura */
  position: absolute;
  width: 450px; /* Valor da Largura */
  height: 600px; /* Valor da Altura */
  background: white;
  color: black;
}

.fz {
  width: 100%;
}

h1 {
  display: flex;
  justify-content: center
}
</style>