var main = document.querySelector(".principal");
var publi = document.querySelector(".publi");
//publicacao
const url = "http://localhost:3000/Publicacao";
//categorias
const urlCategoria = "http://localhost:3000/Categorias";

const cadastro = document.querySelector("#cadastro");

// listar publicações

function carregar() {
  const options = { method: "GET" };

  fetch(url, options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      info.forEach((infoPubli) => {
        var date = new Date(infoPubli.data);
        let dataFormatada = date.toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        });

        var lista = publi.cloneNode(true);
        lista.classList.remove("model");

        lista.id = infoPubli.id_post;
        lista.idUsers = infoPubli.id_user;
        lista.titulo = infoPubli.titulo_post;

        lista.querySelector(".titulo_post").innerHTML = infoPubli.titulo_post;
        lista.querySelector(".categoria").innerHTML = "#" + infoPubli.categoria;
        lista.querySelector(".sub_categoria").innerHTML =
          "#" + infoPubli.subCategoria;
        lista.querySelector(".data_publi").innerHTML = dataFormatada;
        lista.querySelector(".coment").innerHTML = infoPubli.coment;
        if (infoPubli.foto_publi != null) {
          lista
            .querySelector(".post")
            .setAttribute("src", montaImg(infoPubli.foto_publi));
        } else {
          lista.querySelector(".post").remove();
        }

        if ((infoPubli.curtidas = 1)) {
          lista.querySelector(".curtida").src = "../assets/coracaoLikado.png";
        } else {
          lista.querySelector(".curtida").src = "../assets/coracaovazio.png";
        }
        main.appendChild(lista);
      });
    });
}

function montaImg(img) {
  if (img != null) {
    return `data:image/png;base64,${img}`;
  } else return `./default.png`;
}

//modal de cadastro

function showModal() {
  let modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function excluir() {
  let modal = document.querySelector(".modal");
  modal.style.display = "none";
}

//criar postagem

function postar() {
  let titulo = document.querySelector("#tituloInp").value;
  let id_user = document.querySelector("#id_user").value;
  let categoria = document.querySelector("#CategoriaInp").value;
  let subCategoria = document.querySelector("#subCategoriaInp").value;
  let coment = document.querySelector("#comentInp").value;
  let dataInp = document.querySelector("#dataInp").value;
  let curtidas = document.querySelector("#curtidas").value;
  let foto_publi = document.querySelector("#fotoPubliInp").value;

  let dados = {
    titulo_post: titulo,
    id_user: id_user,
    categoria: categoria,
    subCategoria: subCategoria,
    coment: coment,
    data: dataInp,
    curtidas: curtidas,
    foto_publi: foto_publi,
  };

  fetch(url, {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      if (resp[0].titulo != undefined) {
        alert("Produto Cadastrado com Sucesso !");
        window.location.reload();
      } else {
        alert("Não foi possivél cadastrar o produto");
      }
    });
}

// deletar postagem

function DeletePubli(idUsers, id) {
  idUsers = idUsers.parentNode;
  id = id.parentNode;
  const User = JSON.parse(localStorage.getItem("info"));

  const options = {
    method: "DELETE",
    headers: {
      authorization: User.token,
    },
  };

  if (User.role == "ADMIN") {
    if (confirm("confirmar a exclusão? ADM")) {
      fetch(url + "/" + "adm/" + id.id, options)
        .then((res) => res.status)
        .then((res) => {
          console.log(res);
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  } else if (User.id == idUsers.idUsers) {
    if (confirm("confirmar a exclusão?")) {
      fetch(url + "/" + id.id, options)
        .then((res) => res.status)
        .then((res) => {
          window.location.reload();
        })
        .catch((err) => console.error(err));
    }
  } else {
    alert("Você não tem permissão para excluir esta publicação");
  }
}

const toBase64create = () => {
  let file = document.querySelector("#fileCreate")["files"][0];
  let fr = new FileReader();
  fr.onload = function () {
    foto_userBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
    cadastro.imagem.src = `data:image/png;base64,${foto_userBase64}`;
  };
  fr.readAsDataURL(file);
};

// const toBase64update = () => {
//     let file = document.querySelector("#fileUpdate")['files'][0];
//     let fr = new FileReader();
//     fr.onload = function () {
//         foto_userBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
//         alteracao.imagem.src = `data:image/png;base64,${foto_userBase64}`;
//     }
//     fr.readAsDataURL(file);
// }

// modal para comentar

function showModalComent(id, titulo) {
  titulo = titulo.parentNode.parentNode.parentNode.parentNode;
  console.log(titulo.titulo);

  let modal = document.querySelector(".comentar");
  modal.style.display = "block";

  post(id);
}

function excluirModalComent() {
  let modal = document.querySelector(".comentar");
  modal.style.display = "none";
}

function post(id) {
  id = id.parentNode.parentNode.parentNode.parentNode;

  const options = { method: "GET" };

  fetch(url + "/" + id.id, options)
    .then((resp) => {
      return resp.json();
    })
    .then((info) => {
      info.forEach((infoPubli) => {
        var date = new Date(infoPubli.data);
        let dataFormatada = date.toLocaleDateString("pt-BR", {
          timeZone: "UTC",
        });

        //clonar

        var lista = publi.cloneNode(true);
        lista.classList.remove("model");

        lista.querySelector(".titulo_post").innerHTML = infoPubli.titulo_post;
        lista.querySelector(".categoria").innerHTML = "#" + infoPubli.categoria;
        lista.querySelector(".sub_categoria").innerHTML =
          "#" + infoPubli.subCategoria;
        lista.querySelector(".data_publi").innerHTML = dataFormatada;
        lista.querySelector(".coment").innerHTML = infoPubli.coment;

        // criando comentario

        // criarElement();

        if (infoPubli.foto_publi != null) {
          lista
            .querySelector(".post")
            .setAttribute("src", montaImg(infoPubli.foto_publi));
        } else {
          lista.querySelector(".post").remove();
        }

        if (infoPubli.curtidas == 1) {
          lista.querySelector(".curtida").src = "../assets/coracaoLikado.png";
        } else {
          lista.querySelector(".curtida").src = "../assets/coracaovazio.png";
        }
        main.appendChild(lista);
      });
    });
}

//criar input

// function criarElement() {
//   const res = document.createElement("div");
//   const inp = document.createElement("input");

//   res.innerHTML = inp;

//   // res.appendChild(inp)
//   // const respubli = document.querySelector('.footer2')
//   document.querySelector(".footer2").appendChild(res);
// }

//filtro

// function pegaTitulo() {
//   const options = { method: "GET" };

//   fetch(url, options)
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((info) => {
//       info.forEach((infoPubli) => {
//         var busca = document.querySelector("#lupa");
//         var publi = document.querySelectorAll(".publi");

//         console.log(infoPubli.titulo_post.toLowerCase().includes(busca.value.toLowerCase()))
//         publi.forEach((linha) => {
          
//           if (infoPubli.titulo_post.toLowerCase().includes(busca.value.toLowerCase()))
//           {
//             linha.style.display = "table-row";
//           } else {
//             linha.style.display = "aa";
//           }
//         });
//       });
//     });
// }

// var busca = document.querySelector("#lupa");

// busca.addEventListener("keyup", filtrar);

// function filtrar() {

// if(){
// }

// busca.addEventListener("keyup", buscar);

// function buscar(titulo) {
//   var buscar = document.querySelector("#lupa");
//   var linhas = document.querySelectorAll(".titulo_post");

//   linhas.forEach((linha) => {
//     // console.log(linha)
//     // console.log(temp.value == busca.value)
//     if (titulo == buscar.value) {
//       if (linha.innerHTML.toLowerCase().includes(buscar.value.toLowerCase())) {
//         linha.style.display = "table-row";
//       } else {
//         linha.style.display = "none";
//       }
//     }
//   });
// }

//here go again