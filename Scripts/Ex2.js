// const funcionario = document.querySelector('#funcionario');
// const clienteVp = document.querySelector('#clienteVp');
// const cliente = document.querySelector('#cliente');
// const banana = document.querySelector('#banana');
// const laranja = document.querySelector('#laranja');
// const maca = document.querySelector('#maca');
      


function Desconto(tipoFuncionario, banana, laranja, maca){

const valor = banana + laranja + maca;
console.log(valor)

let mensagem

   if (tipoFuncionario === 'funcionario'){
      mensagem = valor * 10 /100
      console.log(valor)
   } else if (tipoFuncionario === 'vip'){
      mensagem = valor * 5 /100
   } else {
      mensagem = valor
   }
       
}