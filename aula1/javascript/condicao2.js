let idade = 17
console.log(`sua idade ${idade} anos`)
if (idade < 16) {
    console.log('não vota')
} else if (idade < 18 || idade > 65) {
    console.log('voto não obrigatorio')
} else if (idade >= 18) {
    console.log('voto obrigaorio')
}