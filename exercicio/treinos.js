let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let vtores = []

function isNumero(n) {
    if (Numer(n) >= 1 && Numer(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, 1) {
    if (L.indexOf(Numer(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(num.value) && !inLista(num.value, valores)) {

    } else {
        alert('não é um numero ou valor já adicionado')
    }
}