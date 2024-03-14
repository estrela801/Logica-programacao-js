# Logica-programacao-js

Treinando lógica de programação com JS

## operadores-aritmeticos.js

~~~js
const numero1 = 40;
const numero2 = 20;
~~~

A palavra `const` é utilizada para variáveis que não vão ser reatribuidas (não permite reatribuição).

Aqui declaramos duas constantes que serão calculadas no bloco a seguir

~~~js
console.log(`Os números das operações são ${numero1} e ${numero2}`);
console.log(`A soma dos números é ${numero1 + numero2}`);
console.log(`A subtracao dos números é ${numero1 - numero2}`);
console.log(`A multiplicacao dos números é ${numero1 * numero2}`);
console.log(`A divisao dos números é ${numero1 / numero2}`);
console.log(`O resto dos números é ${numero1 % numero2}`);
~~~

Em cada uma das operaçõe, temos um operador aritmético:

* `+` -> soma
* `-` -> subtração
* `*` -> multiplicação
* `/` -> divisão
* `%` -> resto

## operadores-atribuicao.js

~~~js
let numero=10
~~~

Declaramos a variável `numero` usando a palara `let`, pois essa variável será **reatribuída** ao longo do nosso código.

Em seguida, fazemos uma série de reatribuíções usando  os operadores de atribuíção.

~~~js
console.log(`O numero é inicialmente igual a ${numero}`);
console.log(`Após reatribuir somando o número 10: ${numero += 10}`);
console.log(`Reatribuindo e subtraindo o número 10: ${numero -= 10}`);
console.log(`Reatribuindo e multiplicando o número 10: ${numero *= 10}`);
console.log(`Reatribuindo e dividindo o número 10: ${numero /= 10}`);
console.log(`Reatribuindo para o resto da divisão por 10: ${numero %= 10}`);
console.log(`Incrementando o número em 1: ${++ numero}`)
console.log(`Decrementando o número em 1: ${-- numero }`)
console.log(`O número final é igual a ${numero}`);
~~~

operadores de atribuíção:

* `+=` -> reatribuíção com soma
* `-=` -> reatribuíção com subtração
* `*=` -> atribuíção com multiplicação
* `/=` -> atribuíção com divisão
* `%=` -> atribuíção com resto da divisão
* `++` -> atribuíção com **incremento 1** (pode ser *pré* ou *pós* incrementado). Ex: `numero ++` (pós-incremento) ou `++ numero` (pré-incremento)
* `--` -> atribuíção com **decremento 1** (pode ser *pré* ou *pós* decrementado).  Ex: `numero --` (pós-decremento) ou `-- numero` (pré-decremento)
