 //pegar horas do terminal
 let atual = new Date()
 let hora = atual.getHours()
 console.log(`agora são ${hora}`)
 if (hora >= 8 && hora < 12) {
     console.log('bom dia')
 } else if (hora > 12 && hora < 18) {
     console.log('boa tarde')
 } else if (hora > 18) {
     console.log('boa noite')
 } else {
     console.log('é madrugada')
 }