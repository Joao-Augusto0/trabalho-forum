const nickname = JSON.parse(localStorage.getItem("info"))
console.log(nickname.nick)

let nick = document.querySelector('#nick_user').innerHTML = nickname.nick

nickname.nick

function listarFav(){

}