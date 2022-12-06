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
                if (infoPubli.foto_publi != null) {
                    lista.querySelector('.post').setAttribute('src', montaImg(infoPubli.foto_publi))
                } else {
                    lista.querySelector('.post').remove()
                }

                if (infoPubli.curtidas = 1) {
                    lista.querySelector('.curtida').src = '../assets/coracaoLikado.png';
                } else {
                    lista.querySelector('.curtida').src = '../assets/coracaovazio.png';
                }
                main.appendChild(lista)
            })
        })
}

function montaImg(img) {
    if (img != null) {
        return `data:image/png;base64,${img}`;
    } else
        return `./default.png`;
}


function showModal() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'block'
}

function excluir() {
    let modal = document.querySelector('.modal')
    modal.style.display = 'none'
}

function postar() {

    let titulo = document.querySelector('#tituloInp').value
    let categoria = document.querySelector('#CategoriaInp').value
    let subCategoria = document.querySelector('#subCategoriaInp').value
    // let data = document.querySelector('.data_publi').value
    let coment = document.querySelector("#comentInp").value
    let foto_user = document.querySelector("#fotoUserInp").value

    let dados = {
        "titulo_post": titulo,
        "categoria": categoria,
        "sub_categoria": subCategoria,
        "coment": coment,
        "foto_user": foto_user
    }
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    };
    (url, options)
        .then(response => response.json())
        .then(resp => {
            if (resp.titulo != undefined) {
                alert("Produto Cadastrado com Sucesso !")
                window.location.reload()
            } else {
                alert("Não foi possivél cadastrar o produto")
            }
        })
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