/*
* @detalhe: Classe que abstrai as funcionalidades do CRUD para uma forma mais genérica
* @author: Rodrigo
*/

import Swal from "sweetalert2"
const crud = {
  insert: (entidade, service, nomeEntidade) => {
    service.insert(entidade)
      .then((resposta) => {

        //Constrói um botão na estilização de anime
        const botaoDiferente = Swal.mixin({
          customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
          },
          buttonsStyling: false
        })

        if (resposta.status == 200) {
          if (entidade.id == "") {
            botaoDiferente.fire({
              title: `Jutsu de invocação!!!`,
              text: `O ${nomeEntidade} ${entidade.nome} foi cadastrado 😁`,
              imageUrl: "https://media1.giphy.com/media/Yv6RcuiyHYmn6/giphy.gif?cid=ecf05e47j89ihfjxbm0iggrwvomat1ibb99d72gj2kc8wwem&rid=giphy.gif",
              confirmButtonText: 'Sim',
              imageWidth: 380,
              imageHeight: 240,
              reverseButtons: true
            })
          } else {
            botaoDiferente.fire({
              title: `Jutsu de substituição!!!`,
              text: `O ${nomeEntidade} ${entidade.nome} foi substituído 😁`,
              imageUrl: "https://media2.giphy.com/media/bKDPrNojOoeu4/giphy.gif?cid=ecf05e478adaffca04e6935cd29f1890376bfa0516ff1e6c&rid=giphy.gif",
              confirmButtonText: 'Sim',
              imageWidth: 350,
              imageHeight: 240,
              reverseButtons: true
            })
          }
        }
      })
      .catch((erro) => {
        Swal.fire({
          icon: 'error',
          title: 'Eita, carambolas... Deu erro 😭',
          text: erro.response.data.message,
        })
      })
  },

  remove: (id, service, nome, listaEntidade, index, nomeEntidade) => {
    const botaoDiferente = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    botaoDiferente.fire({
      title: `Tem certeza? by: Pain`,
      text: `Pq cê ta fazendo isso, o ${nomeEntidade} ${nome} é tão legal 😭`,
      imageUrl: "https://media2.giphy.com/media/hMAhEUs3fwEbC/giphy.gif?cid=ecf05e47bd9bcd7c961935ad4056a625279ea5b19578af04&rid=giphy.gif",
      showCancelButton: true,
      confirmButtonText: 'Sim',
      imageWidth: 360,
      imageHeight: 240,
      cancelButtonText: 'Cancelar',
      reverseButtons: false
    }).then((result) => {
      if (result.isConfirmed) {
        service.remove(id).then((response) => {
          if (response.status == 200) {
            listaEntidade.splice(index, 1);
            botaoDiferente.fire({
              title: `Jutsu mil anos de dor!!!`,
              text: `O ${nomeEntidade} ${nome} foi deletado 💔`,
              imageUrl: "https://media0.giphy.com/media/Do5GRTYRIhSFy/giphy.gif?cid=ecf05e47dhewojtxgiy58ugtzkus3bfyw112jho3t7dcaahw&rid=giphy.gif",
              confirmButtonText: 'Sim',
              imageWidth: 360,
              imageHeight: 240,
              reverseButtons: true
            })
          }
        }).catch((erro) => {
          botaoDiferente.fire(
            'Erro no Jutsu :/!!!',
            `Erro : ${erro.response.data.message}`,
            'error'
          )
        })
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {

        botaoDiferente.fire({
          title: `Jutsu de substituição!!!`,
          text: `Você foi enganado e o ${nomeEntidade} ${nome} não foi deletado 😍`,
          imageUrl: "https://media0.giphy.com/media/y5efFpqW5knlu/giphy.gif?cid=ecf05e47sgsbwlduzti186b7l9w6ed7k8gko5qvwpbsgbsss&rid=giphy.gif",
          confirmButtonText: 'Sim',
          imageWidth: 360,
          imageHeight: 240,
          reverseButtons: true
        })
      }
    })
  },

  list: async (service) => {
    const { request, status } = await service.list()

    if (status == 200) {
      return JSON.parse(request.responseText)
    }
  }
}

export { crud }


