function verificar() {
    let data = new Date()
    let ano = data.getUTCFullYear()
    let fAno = document.getElementById('txtano')
    let res = document.querySelector('div#res')
    if (fAno.value.length == 0 || fAno.value > ano) {
        alert('[Erro] Veriique os dados e tente outra vez')
    } else {
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fAno.value)
        let genero = ''
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //crianaça
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                //idoso
            }

        } else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                //crianaça
            } else if (idade < 21) {
                // jovem
            } else if (idade < 50) {
                // adulto
            } else {
                //idoso
            }
        }
        res.innerHTML = `é ${genero} com ${idade} anos`
    }

}