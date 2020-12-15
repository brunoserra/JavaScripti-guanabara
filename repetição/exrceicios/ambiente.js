function contar() {
    let ini = document.getElementById('txti')
    let passo = document.getElementById('txtp')
    let fim = document.getElementById('txtf')
    let res = document.getElementById('res')
    if (ini.value.length == 0 || passo.value.length == 0 || fim.value.length == 0) {
        alert('[Erro] digite um valor ')
    } else {
        res.innerHTML = 'contando...'

    }

}