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


function updateUser() {

  var usuario = document.querySelector("#nome_userInp");
  var nickname = document.querySelector("#nickInp");
  var Email = document.querySelector("#emailInp");
  var Senha = document.querySelector("#senhaInp");
  var telefone = document.querySelector("#telefoneInp");


  let dados = {
    id_user: User.id,
    nome_user: usuario.value,
    nick: nickname.value,
    email: Email.value,
    senha: Senha.value,
    telefone: telefone.value,
    foto_user: null
  }

  console.log(dados.nick)

  const options = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  };
  localStorage.setItem(
    "info",
    JSON.stringify({nick:dados.nick})
  );

  fetch('http://localhost:3000/Usuarios', options)
    .then((response) => {
      return response.json()
      
    })
    .then((resp)=>{
      console.log(resp)
 
      

      alert("atualizado com sucesso")

      window.location.reload();
    })
    

}