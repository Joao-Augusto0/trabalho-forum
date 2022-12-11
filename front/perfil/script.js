const Favoritos = JSON.parse(localStorage.getItem("favoritos"));

let fav = [];

document.querySelector(".fav").innerHTML = null

fav.push(Favoritos.favotiro[0])



function listarFav() {

    for(i = 0; i< fav.length; i++) {

        if (document.querySelector(".fav").innerHTML == null) {
            document.querySelector(".fav").innerHTML = fav[i];
          } else {
            document.querySelector(".fav").innerHTML = null
          }
    }

  
}
