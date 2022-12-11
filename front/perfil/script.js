const Favoritos = JSON.parse(localStorage.getItem("favoritos"));

let fav = [];

fav.push(Favoritos.favorito);

console.log(fav)

function listarFav() {
  fav.forEach((info) => {
    document.querySelector("li").innerHTML = info;
  });
}
