var email = document.querySelector("#email");
var senha = document.querySelector("#pin");

function cadastro() {

    let dados = {
        email: email.value,
        senha: senha.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/Login', options)
        .then(res => { return res.json() })
        .then(data => {
            if (data.err === undefined) {
                if (dados.email == data.email && dados.senha == data.senha) {
                    localStorage.setItem("info", JSON.stringify({ "id": data.id_user,"nick":data.nick,"role": data.role,"token": data.token }));
                    window.location.href = "../home/index.html";
                }else{
                    alert("Usuario ou senha incorretos")
                }
                
            }
        })
}