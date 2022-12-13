const Favoritos = JSON.parse(localStorage.getItem("favoritos"));
const catFav = document.querySelector(".catFav");
const main = document.querySelector("main");
let fav = [];

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

function irCategoria() {
  // fav.forEach((info) => {
  // let p = document.querySelector("#p").innerHTML = info
  // if(p[0] == "Basquete" || p[1] == "Basquete" || p[2] == "Basquete" || p[3] =="Basquete" || p[4] == "Basquete" ){
    
  // }
  window.location.href = "../home2/index2.html"
  console.log(p[0])
  // })
  // 
}
