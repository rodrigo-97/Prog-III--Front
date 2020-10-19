import Vue from 'vue'
import VueRouter from 'vue-router'


/*
* @Componentes das rotas
*/
import ShinobiCadastro from '../views/ShinobiCadastro.vue'
import ShinobiListagem from '../views/ShinobiListar.vue'
import ClanCadastro from '../views/ClanCadastro.vue'
import ClanListagem from '../views/ClanListar.vue'
// import UsuarioCadastro from '../views/Home.vue'
// import UsuarioListagem from '../views/Home.vue'
import Login from '../views/Login.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: "login",
    component: Login
  },
  {
    path: '/cadastrar-shinobi',
    component: ShinobiCadastro
  },
  {
    path: '/listar-shinobis',
    component: ShinobiListagem
  },
  {
    path: '/cadastrar-clan',
    name: 'c-clan',
    component: ClanCadastro
  },
  {
    path: '/listar-clans',
    component: ClanListagem
  },
  // {
  //   path: '/cadastro-usuario',
  //   component: Home
  // },
  // {
  //   path: '/listagem-usuario',
  //   component: Home
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
