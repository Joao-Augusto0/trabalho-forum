var main = document.querySelector(".principal");
var publi = document.querySelector(".publi");
//publicacao
const url = "http://localhost:3000/Publicacao";
//categorias
const urlCategoria = "http://localhost:3000/Categorias";
// subCategoria
const urlSubCategoria = "http://localhost:3000/SubCategorias";
// resposta
const urlResposta = "http://localhost:3000/Respostas";

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

        // let idPost = JSON.parse(localStorage.getItem("id_postador"));
        // let idUser = JSON.parse(localStorage.getItem("info"));
        // console.log(lista.idUsers)

        //   lista.querySelector('#nick').innerHTML += idUser.nick

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

//criar postagem

function postar() {
  let idUser = JSON.parse(localStorage.getItem("info"));

  let titulo = document.querySelector("#tituloInp").value;
  let id_user = (document.querySelector("#tituloInp").innerHTML = idUser.id);
  let categoria = document.querySelector("#CategoriaInp").value;
  let subCategoria = document.querySelector("#subCategoriaInp").value;
  let coment = document.querySelector("#comentInp").value;

  let curtidas = document.querySelector("#curtidas").value;
  let foto_publi = document.querySelector("#fotoPubliInp").value;

  let data = new Date();
  let dataFormatada =
    data.getFullYear() + "-" + (data.getMonth() + 1) + "-" + data.getDate();

  let dados = {
    titulo_post: titulo,
    id_user: id_user,
    categoria: categoria,
    subCategoria: subCategoria,
    coment: coment,
    data: dataFormatada,
    curtidas: curtidas,
    foto_publi: foto_publi,
  };

  console.log(dados);

  localStorage.setItem(
    "postador",
    JSON.stringify({ id: idUser.id, nick: idUser.nick })
  );

  console.log(categoria);

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dados),
  })
    .then((res) => {
      return res.json();
    })
    .then((resp) => {
      // window.location.reload();
    });
}

// deletar postagem

function DeletePubli(idUsers, id) {
  idUsers = idUsers.parentNode;
  id = id.parentNode;
  const User = JSON.parse(localStorage.getItem("info"));

  console.log(idUsers.idUsers);
  const options = {
    method: "DELETE",
    headers: {
      Authorization: User.token,
    },
  };

  if (User.role == "ADMIN") {
    if (confirm("confirmar a exclusão? ADM")) {
      fetch(url + "/" + "adm/" + id.id, options)
        .then((res) => res.status)
        .then((res) => {
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

//filtro

document.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    filtroCategoria();
    filtroData();

    window.location.href = "../home2/index2.html";
  }
});

let cate = [];

function filtroCategoria() {
  const options = { method: "GET" };

  fetch(urlCategoria, options)
    .then((response) => response.json())
    .then((resp) => {
      resp.forEach((infoCategoria) => {
        var busca = document.querySelector("#lupa");

        if (
          infoCategoria.categoria
            .toLowerCase()
            .includes(busca.value.toLowerCase())
        ) {
          cate.push(infoCategoria.categoria);
          localStorage.setItem(
            "categorias",
            JSON.stringify({ categoria: cate })
          );
        }
      });
    });
}

let data = [];

function filtroData() {
  const options = { method: "GET" };

  fetch(url, options)
    .then((response) => response.json())
    .then((res) => {
      res.forEach((infoPubli) => {
        var busca = document.querySelector("#lupa");

        if (infoPubli.data.toLowerCase().includes(busca.value.toLowerCase())) {
          data.push(infoPubli.data);
          localStorage.setItem("data", JSON.stringify({ data: data }));
        }
      });
    });
}

function settingsPerfil() {
  let modal = document.querySelector(".modalPerfil");
  modal.style.display = "flex";
}

function logout() {
  localStorage.clear();
}

// modal postar

function showModal() {
  let modal = document.querySelector(".modal-container");
  modal.classList.add("mostrar");

  let idUser = JSON.parse(localStorage.getItem("info"));

  if (idUser == null) {
    alert('voce precisa estar logado')
    window.location.href = "../login/index.html";
  }
}

function excluir() {
  let modal = document.querySelector(".modal-container");
  modal.classList.remove("mostrar");
}

// modal de comentar

function iniciaResp(id) {
  const modal = document.querySelector(".coment-container");
  modal.classList.add("mostrar");

  id = id.parentNode.parentNode.parentNode.parentNode;
  localStorage.setItem("post", JSON.stringify({ id_post: id.id }));

  listarResp(id);
}

function fecharResp() {
  const modal = document.querySelector(".coment-container");
  modal.classList.remove("mostrar");
  window.location.reload(true);
}

// modal com as resposta

const modalResp = document.querySelector(".modal-resp");
const modalComent = document.querySelector(".all");

function listarResp(id) {
  const options = { method: "GET" };

  fetch(urlResposta, options)
    .then((response) => response.json())
    .then((resp) => {
      resp.forEach((infoRes) => {
        if (id.id == infoRes.id_post) {
          var lista = modalResp.cloneNode(true);
          lista.classList.remove("model");

          lista.querySelector("#comentario").innerHTML = infoRes.resp;

          modalComent.appendChild(lista);
        }
      });
    });
}

function enviarResp() {
  var idPost = JSON.parse(localStorage.getItem("post"));
  var idUser = JSON.parse(localStorage.getItem("info"));

  let id_post = (document.querySelector("#comentar").innerHTML =
    idPost.id_post);
  let id_user = (document.querySelector("#comentar").innerHTML = idUser.id);
  let resp = document.querySelector("#comentar").value;

  let dados = {
    id_post: id_post,
    id_user: id_user,
    resp: resp,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  };

  console.log(id_post);

  if (dados.resp != "") {
    window.location.reload(true);

    fetch(urlResposta, options)
      .then((response) => response.json())
      .then((resp) => {});
  }
}
