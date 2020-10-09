<template>
  <div class="cadastro border border-4 border-primary">
    <form @submit.prevent="save()" method="post">
      <div class="container" style="background-color: white">
        <div class="row margin-none">
          <div class="col sm-6">
            <div class="form-group">
              <label for="email">E-mail</label>
              <input
                type="email"
                class="preencher"
                placeholder='Exemplo "narutim_rasengan@noveCaldas.com"'
                id="email"
              />
            </div>
          </div>

          <div class="col sm-6">
            <div class="form-group">
              <label for="j-bolado">Apelido</label>
              <input
                type="text"
                class="preencher"
                placeholder='Exemplo "Testa de marquize" que nem a Sakura xD'
                id="j-bolado"
              />
            </div>
          </div>
        </div>

        <div class="row margin-none">
          <div class="col sm-6 padding-top-none">
            <div class="form-group">
              <label for="senha">Senha</label>
              <input
                type="password"
                class="preencher"
                placeholder="Arte sábiaaaaaaa!!! Jutsu da proteção de senha \O/"
                id="senha"
              />
            </div>
          </div>
        </div>

        <div class="col sm-6">
          <div class="btn-enviar">
            <button
              type="submit"
              class="btn-secondary border border-3 border-primary"
              value="Salvar"
              style="width: 100%"
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.preencher {
  width: 100%;
}

.cadastro {
  margin-left: auto;
  margin-right: auto;
  width: 6em;
  background-color: white;

  margin-top: 3rem;
  margin-bottom: 5rem;
  padding: 1rem;
  width: 60%;
  height: 50%;
}

.btn-enviar {
  display: flex;
  justify-content: flex-end;
}
</style>