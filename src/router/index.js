import Router from "vue-router"




import  ShinobiListar from "../components/shinobiListar.vue"

const rotas = [
  {
    name: "l-shinobi",
    path: "/",
    component: ShinobiListar
  }
]

const router = new Router(rotas)


export default router
