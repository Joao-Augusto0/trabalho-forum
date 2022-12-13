const Categorias = JSON.parse(localStorage.getItem("categorias"));
const datass = JSON.parse(localStorage.getItem("data"));
var publi = document.querySelector(".publi");
var main = document.querySelector(".principal");
const url = "http://localhost:3000/Publicacao";

function carregar() {
  if (datass == null) {
    carregarCategoria();
  } else {
    carregarData();
  }
  document.querySelector(".catego").innerHTML = Categorias.categoria;
}

function carregarCategoria() {
  let categoria = [];
  categoria.push(Categorias.categoria);

  categoria.forEach((infoCategoria) => {
    for (i = 0; i < infoCategoria.length; i++) {
      var cat = infoCategoria[i];

      const options = { method: "GET" };

      fetch(url, options)
        .then((resp) => {
          return resp.json();
        })
        .then((info) => {
          info.forEach((infoPubli) => {
            if (cat == infoPubli.categoria) {
              var date = new Date(infoPubli.data);
              let dataFormatada = date.toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              });

              var lista = publi.cloneNode(true);
              lista.classList.remove("model");

              lista.querySelector(".titulo_post").innerHTML =
                infoPubli.titulo_post;
              lista.querySelector(".categoria").innerHTML =
                "#" + infoPubli.categoria;
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
                lista.querySelector(".curtida").src =
                  "../assets/coracaoLikado.png";
              } else {
                lista.querySelector(".curtida").src =
                  "../assets/coracaovazio.png";
              }
              main.appendChild(lista);
            }
          });
        });
    }
  });
}

function carregarData() {
  let data = [];
  data.push(datass.data);

  data.forEach((infoData) => {
    for (let i = 0; i < infoData.length; i++) {
      var subCat = infoData[i];

      console.log(subCat);
      const options = { method: "GET" };

      fetch(url, options)
        .then((resp) => {
          return resp.json();
        })
        .then((info) => {
          info.forEach((infoPubli) => {
            if (subCat == infoPubli.data) {
              var date = new Date(infoPubli.data);
              let dataFormatada = date.toLocaleDateString("pt-BR", {
                timeZone: "UTC",
              });

              var lista = publi.cloneNode(true);
              lista.classList.remove("model");

              lista.querySelector(".titulo_post").innerHTML =
                infoPubli.titulo_post;
              lista.querySelector(".categoria").innerHTML =
                "#" + infoPubli.categoria;
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
                lista.querySelector(".curtida").src =
                  "../assets/coracaoLikado.png";
              } else {
                lista.querySelector(".curtida").src =
                  "../assets/coracaovazio.png";
              }
              main.appendChild(lista);
            }
          });
        });
    }
  });
}

function limpar() {
  localStorage.removeItem("categorias");
  localStorage.removeItem("data");

  window.location.href = "../home/index.html";
}

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];

function favoritar() {
  const fav = document.querySelector(".catego").innerHTML

  favoritos.push(fav)

  localStorage.setItem(
    "favoritos",JSON.stringify(favoritos))
}

// aaaaaaaaaaaaa


// function settingsPerfil() {
//   let modal = document.querySelector(".modalPerfil");
//   modal.style.display = "flex";
// }

// function logout() {
//   localStorage.clear();
// }

// // modal postar

// function showModal() {
//   let modal = document.querySelector(".modal-container");
//   modal.classList.add("mostrar");
// }

// function excluir() {
//   let modal = document.querySelector(".modal-container");
//   modal.classList.remove("mostrar");
// }

// // modal de comentar

// function iniciaResp(id) {
//   const modal = document.querySelector(".coment-container");
//   modal.classList.add("mostrar");

//   id = id.parentNode.parentNode.parentNode.parentNode;
//   localStorage.setItem("post", JSON.stringify({ id_post: id.id }));

//   listarResp();
// }

// function fecharResp() {
//   const modal = document.querySelector(".coment-container");
//   modal.classList.remove("mostrar");
//   window.location.reload(true);
// }

// // modal com as resposta

// const modalResp = document.querySelector(".modal-resp");
// const modalComent = document.querySelector(".all");

// function listarResp() {
//   const options = { method: "GET" };

//   fetch(urlResposta, options)
//     .then((response) => response.json())
//     .then((resp) => {
//       resp.forEach((infoRes) => {
//         var lista = modalResp.cloneNode(true);
//         lista.classList.remove("model");

//         lista.querySelector("#comentario").innerHTML = infoRes.resp;

//         modalComent.appendChild(lista);
//       });
//     });
// }

// function enviarResp() {
//   var idPost = JSON.parse(localStorage.getItem("post"));
//   var idUser = JSON.parse(localStorage.getItem("info"));

//   let id_post = (document.querySelector("#comentar").innerHTML =idPost.id_post);
//   let id_user = (document.querySelector("#comentar").innerHTML = idUser.id);
//   let resp = document.querySelector("#comentar").value;

//   let dados = {
//     id_post: id_post,
//     id_user: id_user,
//     resp: resp,
//   };

//   const options = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(dados),
//   };

//   console.log(id_post);

//   if (dados.resp != "") {
//     window.location.reload(true);

//     fetch(urlResposta, options)
//       .then((response) => response.json())
//       .then((resp) => {});
//   }
// }