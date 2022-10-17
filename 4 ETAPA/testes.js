/* Array[] https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array
    MÉTODOS
        // https://www.macoratti.net/18/09/js_marr1.htm / https://blog.lsantos.dev/array-es13/
        .length saber tamanho do array
        .concat()	Junta dois ou mais arrays e retorna uma cópia dos arrays unidos
        .join()	Junta todos os elementos de um array em uma string
        .pop()	Remove o último elemento de um array e retorna esse elemento
        .push()	Adiciona novos elementos ao final de um array e retorna o novo tamanho
        .shift()	Remove o primeiro elemento de um array e retorna esse elemento
        .slice()	Seleciona uma parte de um array e retorna o novo array
        .splice()	Adiciona / Remove elementos de um array
        .toString()	Converte um array em uma string e retorna o resultado
        .unshift()	Adiciona novos elementos ao início de um array e retorna o novo tamanho

    Array.from() // deixa você criar um Array de: objetos array-like e Objetos iteráveis
        // possui parametros: arrayLike,mapFn,thisArg
        function f() {
        return Array.from(arguments);
        }
        console.log(f(1, 2, 3))

        console.log(Array.from([4, 5, 6], x => x + x))

    Array.isArray() // VERIFICA SE É ARRAY OU NÃO > FALSE OU TRUE
        //https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray#exemplos
        console.log(Array.isArray(new Array()))

    Array.of() // CONVERTE ARGUMENTOS(NUMEROS OU STRINGS...) PARA ARRAYS
        console.log(Array.of(1, 2, 3, "AAA", false))

*/
/* Object {} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object


*/
/* Function (){} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function

*/
/* Boolean(true, false) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

*/
/* Date() {setinterval e settimeout} https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

*/
/* MATH() floor(), ceil(), random()? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

*/
/* Number https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

*/
/* String "",'',`` https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

*/