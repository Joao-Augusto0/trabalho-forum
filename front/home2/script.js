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
  const fav = document.querySelector(".catego").innerHTML;


  favoritos.push(fav)

  localStorage.setItem(
    "favoritos",JSON.stringify(favoritos))

  // const favorito = JSON.parse(localStorage.getItem("favoritos"));

  // favorito.forEach((infoFav)=>[
  //   console.log(infoFav)
  // ])
  // favorito.push(Categorias.categoria)
}
