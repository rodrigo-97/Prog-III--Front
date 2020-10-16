import Swal from "sweetalert2"
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
          }else{
            Swal.fire({
              icon: 'success',
              title: "Cadastro alterado 😁",
              showConfirmButton: false,
              timer: 2000
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
    Swal.fire({
      title: "Confirmar exclusão",
      text: `O ${nomeEntidade} ${nome} será removido de forma definitiva 😭`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#4d9ce9",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirmar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        service.remove(id).then((response) => {
          if (response.status == 200) {
            listaEntidade.splice(index, 1);
          }
        })
        .catch((erro) => {
          Swal.fire({
            title: "Ops... Deu ruim 😭",
            text: `${erro}`,
            icon: "warning",
            confirmButtonColor: "#4d9ce9",
            confirmButtonText: "Ok",
          })
        })
      }
    });
  },
}

export { crud }


