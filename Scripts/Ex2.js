const laranja = document.querySelector('#laranjas').value * 3
const maca = document.querySelector('#maca').value * 1
const banana = document.querySelector('#banana').value *4
const tipoDesconto = document.querySelector('#tipoDesconto')

const valor =  laranja + maca +

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
