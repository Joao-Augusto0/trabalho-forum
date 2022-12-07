var main = document.querySelector('.principal')
var publi = document.querySelector('.publi')
const url = "http://localhost:3000/Publicacao"
const cadastro = document.querySelector('#cadastro')

function carregar() {
    const options = { method: 'GET' }

    fetch(url, options).then(resp => { return resp.json() })
        .then(info => {
            info.forEach(infoPubli => {
                var date = new Date(infoPubli.data)
                let dataFormatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                var lista = publi.cloneNode(true)
                lista.classList.remove("model")
                lista.id = infoPubli.id_post
                lista.querySelector('.titulo_post').innerHTML = infoPubli.titulo_post
                lista.querySelector('.categoria').innerHTML = "#" + infoPubli.categoria
                lista.querySelector('.sub_categoria').innerHTML = "#" + infoPubli.subCategoria
                lista.querySelector('.data_publi').innerHTML = dataFormatada
                lista.querySelector('.coment').innerHTML = infoPubli.coment
                if (infoPubli.foto_publi != null) {
                    lista.querySelector('.post').setAttribute('src', montaImg(infoPubli.foto_publi))
                } else {
                    lista.querySelector('.post').remove()
                }

                if (infoPubli.curtidas = 1) {
                    lista.querySelector('.curtida').src = '../assets/coracaoLikado.png'
                } else {
                    lista.querySelector('.curtida').src = '../assets/coracaovazio.png'
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
    let id_user = document.querySelector('#id_user').value
    let categoria = document.querySelector('#CategoriaInp').value
    let subCategoria = document.querySelector('#subCategoriaInp').value
    let coment = document.querySelector("#comentInp").value
    let dataInp = document.querySelector('#dataInp').value
    let curtidas = document.querySelector('#curtidas').value
    let foto_publi = document.querySelector("#fotoPubliInp").value

    let dados = {
        "titulo_post": titulo,
        "id_user": id_user,
        "categoria": categoria,
        "subCategoria": subCategoria,
        "coment": coment,
        "data": dataInp,
        "curtidas": curtidas,
        "foto_publi": foto_publi
    }

    fetch(url, {
        "method": "Post",
        "headers": {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(dados)
    })
        .then(res => { return res.json() })
        .then(resp => {
            if (resp.login != undefined) {
                alert("Produto Cadastrado com Sucesso !")
                window.location.reload()
            } else {
                alert("Não foi possivél cadastrar o produto")
            }
        })
}

function excluiPubli(id) {
    id = id.parentNode
    const options = {
        method: 'DELETE'
    }

    if (confirm("confirmar a exclusão?")) {
        fetch(url + '/' + id.id, options)
            .then(res => res.status)
            .then(res => {
                if (res == 204)
                    window.location.reload()
            })
            .catch(err => console.error(err))
    }
}

function post() {

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