/*IF-ELSE
    const idade = 27
    if(idade>=18) {
        console.log("Voce tem mais que 18 anos")
    }

    const parimpar = Math.round(Math.random()*10)
    if(parimpar%2 === 0){
        console.log("É par!")
    }

*//*IF/ELSE IF/ELSE
    const parimpar = Math.round(Math.random() * 10)
    if (parimpar % 2 === 0) {
        console.log("É par!")
    } else if (parimpar % 2 === 1) {
        console.log("É impar!")
    }

//CALCULA IMC
    const imc = Math.round(Math.random() * 120)
    if (imc <= 40) {
        console.log("Estrema Magreza")
    } else if (imc <= 60 && imc >= 41) {
        console.log("Magro")
    } else if (imc <=80 && imc >= 61){
        console.log("Talvez peso ideal")
    } else if(imc<=100 && imc >= 81){
        console.log("pouco acima do peso")
    }else{
        console.log("Está acima do peso!!!")
    }

*//*SWITCH, CASE
    const opcao = Math.round(Math.random()*5)
    switch(opcao) {
        case 1:
            console.log("deu no 1")
            break
        case 2:
            console.log("deu no 2")
            break
        case 3:
            console.log("deu no 3")
            break
        default:
            console.log("não deu em nenhum desses 1,2,3")
            break
    }

*//*BREAK(trava e sai do escopo) e CONTINUE(trava mas continua o restante do escopo)
    Continue não funciona no Switch
    Continue serve para laços de repetição, break também

*//*ternario
    const opcao = Math.round(Math.random() * 100)
    console.log(opcao < 50 ? opcao + " é menor que 50" : opcao + " é maior que 50")

*//*FOR
    for (let i = 0; i <= 50; i++) {
        console.log("Este é " + i)
    }

    const array = []
    for (let i = 0; i <= 1000; i++) {
        array.push(i)
    }
    //console.log(array)
    console.log(array.join(", "))

    *//*FOR IN
    const object = {
        nome: "Jonatan",
        sobrenome: "Marques",
        idade: 27,
        pais: "Brazil"
    }
    let text = ""
    for(let x in object){
        text += object[x]
    }
    console.log(text)

    const array = [1,2,3,4,5,6,7,8,9]
    let text = ''
    //let text = new String
    for(let i in array){
        text += array[i]
    }
    console.log(text)

*//*FOR OF (new in ES6) semelhante ao for in, fiz testes e vi que  não pode ser usado em objetos, somente em arrays

*//*WHILE
    let i = 0
    while (i <= 50) {
        console.log("Este é " + i)
        i++;
    }

    *//*DO/WHILE
    let i = 0
    do {
        console.log("Este é " + i)
        i++;
    } while (i <= 50)
*/