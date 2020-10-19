/*
* @detalhe: Classe que abstrai as funcionalidades do CRUD para uma forma mais genérica
* @author: Rodrigo
*/

import { listaAlerts } from "./alerts"
const crud = {
  insert: (entidade, service, nomeEntidade) => {
    service.insert(entidade)
      .then((resposta) => {
        if (resposta.status == 200) {
          if (entidade.id == "") {
            listaAlerts.alertCadastro(nomeEntidade, entidade)
          } else {
            listaAlerts.alertAlterar(nomeEntidade, entidade);
          }
        }
      })
      .catch((erro) => {
        listaAlerts.alertExcecao(erro)
      })
  },

  remove: (id, service, nome, listaEntidade, index, nomeEntidade) => {
    listaAlerts.alertConfirmarExclusao(id, service, nome, listaEntidade, index, nomeEntidade)
  },

  list: async (service) => {
    const { request, status } = await service.list()

    if (status == 200) {
      return JSON.parse(request.responseText)
    }
  }
}

export { crud }


