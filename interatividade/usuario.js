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
        res.innerHTML = `Deu certo ${idade}`
    }
}