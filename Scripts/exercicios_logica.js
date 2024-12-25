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
console.log(a);
