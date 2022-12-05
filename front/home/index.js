var main = document.querySelector('.principal')
var publi = document.querySelector('.publi')
const url = fetch("http://localhost:3000/Publicacao")
const cadastro = document.querySelector('#cadastro')

function carregar() {

    url.then(resp => { return resp.json() })
        .then(info => {
            info.forEach(infoPubli => {
                var date = new Date(infoPubli.data)
                let dataFromatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                var lista = publi.cloneNode(true)
                lista.classList.remove("model")
                lista.querySelector('.titulo_post').innerHTML = infoPubli.titulo_post
                lista.querySelector('.categoria').innerHTML = "#" + infoPubli.categoria
                lista.querySelector('.sub_categoria').innerHTML = "#" + infoPubli.subCategoria
                lista.querySelector('.data_publi').innerHTML = dataFromatada
                lista.querySelector('.coment').innerHTML = infoPubli.coment
                lista.querySelector('.post').src = infoPubli.foto_publi == 'null' ? '../assets/default.png' : `data:image/png;base64,${infoPubli.foto_publi}`;
                if (infoPubli.curtidas = 1) {
                    lista.querySelector('.curtida').src = '../assets/coracaoLikado.png';
                } else {
                    lista.querySelector('.curtida').src = '../assets/coracaovazio.png';
                }
                console.log()
                main.appendChild(lista)
            })
        })
}

function postar() {
    const usuario = {
        id_post: cadastro.login.value,
        categoria: cadastro.categoria.value,
        subCategoria: cadastro.subCategoria.value,
        coment: cadastro.coment.value,
        foto_user: foto_userBase64
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:  JSON.stringify(usuario)
    };
    (url, options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));
}

const toBase64create = () => {
    let file = document.querySelector("#fileCreate")['files'][0];
    let fr = new FileReader();
    fr.onload = function () {
        foto_userBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
        cadastro.imagem.src = `data:image/png;base64,${foto_userBase64}`;
    }
    fr.readAsDataURL(file);
}

// const toBase64update = () => {
//     let file = document.querySelector("#fileUpdate")['files'][0];
//     let fr = new FileReader();
//     fr.onload = function () {
//         foto_userBase64 = fr.result.replace("data:", "").replace(/^.+,/, "");
//         alteracao.imagem.src = `data:image/png;base64,${foto_userBase64}`;
//     }
//     fr.readAsDataURL(file);
// }