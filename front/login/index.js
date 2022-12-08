var email = document.querySelector("#email");
var senha = document.querySelector("#pin");

function cadastro() {

    let dados = {
        "email": email.value,
        "senha": senha.value
    }

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };

    fetch('http://localhost:3000/Login', options)
        .then(res => { return res.json() })
        .then(data => {console.log(data)
            if (data.err === undefined) {
                if (dados.email == data[0].email && dados.senha == data[0].senha) {
                    window.location.href = "../home/index.html";
                }else{
                    alert("Usuario ou senha incorretos")
                }
                
            }
        })
}