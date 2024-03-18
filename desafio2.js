const altura = window.prompt('Digite sua altura'),
peso = window.prompt('Digite seu peso');

const imc = peso/(altura**2) ;

if(imc <=18.5){
    window.alert(`Abaixo do peso IMC: ${imc.toFixed(2)}`);
}    else if (imc<=25){
    window.alert(`Peso normal IMC: ${imc.toFixed(2)}`);
}  
        else if (imc<=30){
    window.alert(`Sobrepeso IMC: ${imc.toFixed}`);
}           else if (imc <=35){
    window.alert(`Obesidade grau 1 IMC: ${imc.toFixed}`);
}               else if (imc <=40){
    window.alert(`Obesidade grau 2 IMC: ${imc.toFixed}`);
}                   else {
    window.alert(`Obesidade grau 3 IMC: ${imc.toFixed}`);
}  


