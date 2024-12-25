// 1. Pirâmide de Níveis
// Descrição
// Escreva uma função que desenhe uma pirâmide centralizada com n níveis usando os caracteres #. Cada nível aumenta em largura, formando uma estrutura triangular.

// Entrada Um número inteiro n.

// Saída Uma pirâmide centralizada com n níveis.

function Piramide(n){
     
    for(let i = 1; i <= n;  i++){
        const space = ' '.repeat(n - i)
        const hashtag = '#'.repeat(i*2-1)
       console.log(space + hashtag);  
    }
    
}
// Piramide(8)

// -----------------------------------------

// 2. FizzBuzz
// Descrição
// Escreva uma função que imprime os números de 1 a n. Mas:

// Para múltiplos de 3, imprima Fizz em vez do número.
// Para múltiplos de 5, imprima Buzz em vez do número.
// Para múltiplos de 3 e 5, imprima FizzBuzz.
// Entrada Um número inteiro n.

// Saída Os números de 1 a n, com as substituições especificadas.


function FizzBuzz(n){
    for(let i = 1; i <=n; i++){
        if(i%3 === 0)console.log('Fizz'); 
        else if( i%5 ===0 ) console.log('buzz');
        else if(i%3 === 0 || i%5 === 0) console.log('FizzBuzz');
        else console.log(i);
        
        
    }
}
// FizzBuzz(10)

function reverseString(s){
    return s.split('').reverse().join('')
}
const a = reverseString('rodrigo')
// console.log(a);

function SomaPar(n){
    let numeros = []
    for(let i = 1; i <= n; i++){
        if(i%2===0){
            numeros.push(i)
        }
    }
    console.log( numeros, numeros.reduce((acc, value) => acc +value, 0))
}

// SomaPar(12)

function verificaPalindromo(s){
    const ns = s.split('').reverse().join('')
    if(s === ns) return console.log("É um palindromo")
    else return console.log("Não é um palindromo")
}

// verificaPalindromo("araa")

function verificaNumeroTriangular(n){
    const num = 1 + 8 * n
    let raiz = Math.sqrt(num)

    if(Number.isInteger(raiz)){
        let n = (-1 + raiz) / 2;
        return n > 0;
    }
    return console.log("sla");
    
}

// console.log(verificaNumeroTriangular(6))


function verificaOrdem(n){
for(let i = 0; i < n.length - 1; i++){
    if(n[i]>n[i+1]){
        return false
    }    
}

return true
}

// console.log(verificaOrdem([7,4,4,4,5,6,7]));

const transacoes = [
    { valor: 100, categoria: 'alimentação' },
    { valor: 50, categoria: 'transporte' },
    { valor: 200, categoria: 'alimentação' },
    { valor: 150, categoria: 'saúde' },
    { valor: 80, categoria: 'transporte' },
]
function sla(data, filter){
    let newData = []
    data.forEach(el =>{
        if(el == filter) newData.push(el)
    })
    console.log(newData);
    
}
sla(transacoes, 'alimentação')

