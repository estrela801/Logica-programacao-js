const altura = window.prompt('Digite sua altura');
const peso = window.prompt('Digite seu peso');

const imc = peso/(altura**2) ;

if(imc <=18.5){
    window.alert('Abaixo do peso');
}    else if (imc<=24.9){
    window.alert('Peso normal');
}  
 else if (imc<=29.9){
    window.alert('Sobrepeso');
}   else if (imc <=34.9){
    window.alert('Obesidade 1')
} else if (imc <=39,9){
    window.alert('Obesidade 2');
}   else {
    window.alert('Obesidade 3');
}  


