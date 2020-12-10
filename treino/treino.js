function carregar(params) {
    let msg = document.getElementById('msg')
    let img = document.getElementById('imagem')
    let data = new Date()
    let hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'imagens/manha.png'
        document.body.style.backgroundColor = '#FFE4B5'
            //bom dia
    } else if (hora >= 12 && hora < 18) {
        //boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.backgroundColor = '#D2691E'
    } else {
        img.src = 'imagens/noite.png'
        document.body.style.backgroundColor = '#191970'

        //boa noite

    }
}