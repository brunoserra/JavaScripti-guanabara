let num = [5, 7, 8, 3]
    //num[4] = 12 acrescentar elemente
num.push(6)
num.sort()
console.log(num)
let pos = num.indexOf(3)
console.log(`o valor 3 esta na posição ${pos}`)
    /*
    for (let pos = 0; pos < num.length; pos++) {
        console.log(num[pos])
    */
    //} //percurso para vetor acima
    //Forma mais simples
for (let pos in num) {
    console.log(num[pos])
}