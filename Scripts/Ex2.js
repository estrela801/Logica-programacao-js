
// const funcionario = document.querySelector('#funcionario');
// const clienteVp = document.querySelector('#clienteVp');
// const cliente = document.querySelector('#cliente');
// const banana = document.querySelector('#banana');
// const laranja = document.querySelector('#laranja');
// const maca = document.querySelector('#maca');
      


function Desconto(tipoFuncionario, banana, laranja, maca){

const valor = banana + laranja + maca;
console.log(valor)
const laranja = document.querySelector('#laranjas').value * 3
const maca = document.querySelector('#maca').value * 1
const banana = document.querySelector('#banana').value *4
const tipoDesconto = document.querySelector('#tipoDesconto')






   if (tipoFuncionario === 'funcionario'){
      mensagem = valor * 10 /100
      console.log(valor)
   } else if (tipoFuncionario === 'vip'){
      mensagem = valor * 5 /100
   } else {
      mensagem = valor
   }
       
}
function calculeValor (valor, tipoDesconto){
   let msg
      if(tipoDesconto === 'funcionario')
      {
         msg = valor - valor * 10/100
      }
       else if(tipoDesconto === 'vip')
      {
         msg = valor - valor * 5/100
      }
      else
      {
         msg = valor
      }
      return msg

}
document.querySelector('#valorFinal').innerHTML = msg

