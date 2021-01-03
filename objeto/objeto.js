let amigo = {
    nome: 'Bruno',
    sexo: 'M',
    peso: 88,
    emagreceu(p = 0) {
        console.log('engordou')
        this.peso -= p
    }
}
amigo.emagreceu(10)
console.log(`${amigo.nome} peso ${amigo.peso}kg`)