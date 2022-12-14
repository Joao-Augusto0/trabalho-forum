const Favoritos = JSON.parse(localStorage.getItem("favoritos"));
const User = JSON.parse(localStorage.getItem("info"));
const catFav = document.querySelector(".catFav");
const main = document.querySelector("main");
let fav = [];

document.querySelector('#nick_user').innerHTML = User.nick

fav.push(Favoritos);

function listarFav() {
  fav.forEach((info) => {
    var lista = catFav.cloneNode(true);
    console.log(info)
    lista.classList.remove("model");

    lista.querySelector("#p").innerHTML = info


    main.appendChild(lista);
  });
}
