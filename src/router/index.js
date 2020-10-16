import Router from "vue-router"


import  ShinobiListar from "../components/shinobiListar.vue"

const rotas = [
  {
    path: "/listar-shinobi",
    component: ShinobiListar
  }
]

const router = new Router(rotas)


export default router
