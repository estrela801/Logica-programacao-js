const funcionario = document.querySelector('#funcionario');
const clienteVp = document.querySelector('#clienteVp');
const cliente = document.querySelector('#cliente');
const banana = document.querySelector('#banana') * 4;
const laranja = document.querySelector('#laranja') * 5;
const maca = document.querySelector('#maca') * 3;

let resultado 
function valorCompra (funcionario, clienteVp, cliente, bananas, laranjas, macas){
       if (funcionario){
         resultado = 10%(banana + laranja + maca);
         if (clienteVp){
            resultado = 5%(banana + laranja + maca);
         } else{
            mensagem = banana + laranja + maca;
         }
       }
}