var main = document.querySelector('.principal')
var publi = document.querySelector('.publi')

function carregar() {
    fetch("http://localhost:3000/Publicacao")
        .then(resp => { return resp.json() })
        .then(info => {
            info.forEach(infoPubli => {
                var date = new Date(infoPubli.data);
                let dataFromatada = date.toLocaleDateString('pt-BR', { timeZone: 'UTC' });

                var lista = publi.cloneNode(true);
                lista.classList.remove("model")
                lista.querySelector('.titulo_post').innerHTML = infoPubli.titulo_post
                lista.querySelector('.categoria').innerHTML = "#"+infoPubli.categoria
                lista.querySelector('.sub_categoria').innerHTML = "#"+infoPubli.subCategoria
                lista.querySelector('.data_publi').innerHTML = dataFromatada
                lista.querySelector('.coment').innerHTML = infoPubli.coment
                if (infoPubli.curtidas = 1) {
                    lista.querySelector('.curtida').src = '../assets/coracaoLikado.png';
                } else {
                    lista.querySelector('.curtida').src = '../assets/coracaovazio.png';
                }
                main.appendChild(lista);
            });
        });
}