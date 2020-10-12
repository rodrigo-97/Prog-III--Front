import Swal from "../../node_modules/sweetalert2"

const crud = {
  insert: (entidade, service) => {
    service.insert(entidade)
      .then((resposta) => {
        if (resposta.status == 200) {
          if (entidade.id == "") {
            Swal.fire({
              icon: 'success',
              title: "Cadastro efetuado 😁",
              showConfirmButton: false,
              timer: 2000
            })
          } else {
            Swal.fire({
              icon: 'success',
              title: "Cadastro alterado 😁",
              showConfirmButton: false,
              timer: 2000
            })
          }
        }else{
          Swal.fire({
            icon: 'danger',
            title: "Cara, alguma deu errado 😁",
            showConfirmButton: false,
            timer: 2000
          })
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

  remove: (id, service, nome, listaEntidade, index) => {
    Swal.fire({
      title: "Confirmar exclusão?",
      text: "O shinobi " + nome + " será removido de forma definitiva 😭",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4d9ce9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        service.remove(id)
        listaEntidade.splice(index, 1);
      }
    });
  },

  // list: (entidade, service) => {

  // },
}

export { crud }


