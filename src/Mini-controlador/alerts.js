import Swal from "sweetalert2"

//Constrói um botão no estilização de anime
const botaoDiferente = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

const gifs = {
  jirayaNaruto: "https://media1.giphy.com/media/Yv6RcuiyHYmn6/giphy.gif?cid=ecf05e47j89ihfjxbm0iggrwvomat1ibb99d72gj2kc8wwem&rid=giphy.gif",
  timeSeteDancando: "https://media2.giphy.com/media/bKDPrNojOoeu4/giphy.gif?cid=ecf05e478adaffca04e6935cd29f1890376bfa0516ff1e6c&rid=giphy.gif",
  painBugado: "https://media1.tenor.com/images/60594253fbeba722c820b5ddf12f1a97/tenor.gif?itemid=17986467",
  painSinistro: "https://media2.giphy.com/media/hMAhEUs3fwEbC/giphy.gif?cid=ecf05e47bd9bcd7c961935ad4056a625279ea5b19578af04&rid=giphy.gif",
  milAnosDeDor: "https://media0.giphy.com/media/Do5GRTYRIhSFy/giphy.gif?cid=ecf05e47dhewojtxgiy58ugtzkus3bfyw112jho3t7dcaahw&rid=giphy.gif",
  narutoSasuke: "https://media0.giphy.com/media/y5efFpqW5knlu/giphy.gif?cid=ecf05e47sgsbwlduzti186b7l9w6ed7k8gko5qvwpbsgbsss&rid=giphy.gif",
}

/*
* Alert para Exceção
*/
function alertExcecao(erro) {
  botaoDiferente.fire({
    title: `Eita, carambolas... Deu erro 😭`,
    text: erro.response.data.message,
    imageUrl: gifs.painBugado,
    confirmButtonText: 'Sim',
    imageWidth: 360,
    imageHeight: 360,
    reverseButtons: true
  })
}
//-------------------------------


function alertCadastro(nomeEntidade, entidade) {
  botaoDiferente.fire({
    title: `Jutsu de invocação!!!`,
    text: `O ${nomeEntidade} ${entidade.nome} foi cadastrado 😁`,
    imageUrl: gifs.jirayaNaruto,
    confirmButtonText: 'Sim',
    imageWidth: 380,
    imageHeight: 240,
    reverseButtons: true
  })
}

function alertAlterar(nomeEntidade, entidade) {
  botaoDiferente.fire({
    title: `Jutsu de substituição!!!`,
    text: `O ${nomeEntidade} ${entidade.nome} foi substituído 😁`,
    imageUrl: gifs.timeSeteDancando,
    confirmButtonText: 'Sim',
    imageWidth: 350,
    imageHeight: 240,
    reverseButtons: true
  })
}

function alertConfirmarExclusao(id, service, nome, listaEntidade, index, nomeEntidade) {
  botaoDiferente.fire({
    title: `Tem certeza? by: Pain`,
    text: `Pq cê ta fazendo isso, o ${nomeEntidade} ${nome} é tão legal 😭`,
    imageUrl: gifs.painSinistro,
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
            imageUrl: gifs.milAnosDeDor,
            confirmButtonText: 'Sim',
            imageWidth: 360,
            imageHeight: 240,
            reverseButtons: true
          })
          return true
        }
      })
      .catch((erro) => {
        alertExcecao(erro)
      })
    } else if (
      result.dismiss === Swal.DismissReason.cancel
    ) {
      botaoDiferente.fire({
        title: `Jutsu de substituição!!!`,
        text: `Você foi enganado e o ${nomeEntidade} ${nome} não foi deletado 😍`,
        imageUrl: gifs.narutoSasuke,
        confirmButtonText: 'Sim',
        imageWidth: 360,
        imageHeight: 240,
        reverseButtons: true
      })

      const retorno = false
      return retorno
    }
  })
}

const listaAlerts = {
  alertCadastro,
  alertAlterar,
  alertExcecao,
  alertConfirmarExclusao
}

export { listaAlerts }