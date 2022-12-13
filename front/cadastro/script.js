var usuario = document.querySelector("#usuario");
var nickname = document.querySelector("#nickname");
var role = document.querySelector("#role");
var Email = document.querySelector("#E-mail");
var Senha = document.querySelector("#Senha");
var telefone = document.querySelector("#telefone");

function cadastro() {
  let dados = {
    nome_user: usuario.value,
    nick: nickname.value,
    role: role.value,
    email: Email.value,
    senha: Senha.value,
    telefone: telefone.value,
  };

  const options = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  }

  if(dados.nome_user != "" && dados.nick != "" && dados.role != "" &&
  dados.email != "" && dados.senha != ""){

    fetch("http://localhost:3000/Usuarios", options)
    .then((res) => {
      return res.json(console.log(res));
    })
    .then((resp) => {
        console.log(resp)
        alert("Cadastrado com sucesso!");
        window.location.href = "../login/index.html"
    })
  }else{
    alert("Não foi possível cadastrar");
  }
}