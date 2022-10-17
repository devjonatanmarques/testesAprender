//https://www.devmedia.com.br/javascript-operadores-rest-e-spread/41200#5
//https://www.facebook.com/cataline.io/videos/2834804543311001/

//SPREAD É PARA OBJETOS E ARRAYS
let array = [1, 2, 3, 4, 5]
let object = { nome: "Jonatan", sobrenome: "Marques", pais: "Brazil" }
let outroArray = [...array, 6, 7, 8, 9, 10]
let outroObjetc = { ...object, idade: 27, celular: "9999-9999" }
console.log(outroArray)
console.log(outroObjetc)

//DESTRUCTURING SERVE PARA EXTRAIR OBJETOS E ARRAYS PARA VARIAVEIS ESPEFICIFICAS E ISOLADAS
let [a, b, c, d, e, f, g, h, i] = outroArray
let { nome, sobrenome, pais, idade, celular } = outroObjetc
console.log(a, b, c, d, e, f, g, h, i)
console.log(nome, sobrenome, pais, idade, celular)

//REST => SERVE PARA PARAMETROS EM FUNÇÕES, É UM ARRAY
function testandoRest(a, b, ...theArgs) {
    console.log(a, b, theArgs); // 1, 2, [3,4,5]
}
testandoRest(1, 2, 3, 4, 5);

function testandoRest2(...theArgs) {
    console.log(theArgs); // [1,2,3,4,5]
}
testandoRest2(1, 2, 3, 4, 5);

function testandoRest3(...args) {
    text = ""
    for (let i in args) {
        text += args[i]
    }
    console.log(text)
}
testandoRest3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

function filtrarImpares(...numeros) {
    return numeros.filter((numero) => numero % 2 !== 0);
}
const impares = filtrarImpares(1,2,3,4,5,6,7,8,9,10);
console.log(impares);  // 1,3,5,7,9