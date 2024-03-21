function calculeConversao(temperatura, atual, ){


  const temperatura = parseFloat(window.prompt("Digite a temperatura")),
    atual = window.prompt("Digite a escala atual, Celsius (c), Fanrenheit (f) e Kelvin (k)"),
    conversao = window.prompt("Digite a unidade desejada, Celsius (c), Fahrenheit (f) ou Kelvin (k)");
  
  
  const calculoCelsius1 = (temperatura * 9) / 5 + 32,
    calculoCelsius2 = temperatura + 273.15,
    calculoFahrenheit1 = ((temperatura - 32) * 5) / 9,
    calculoFahrenheit2 = ((temperatura + 459.67) * 5) / 9,
    calculoKelvin1 = temperatura - 273.15,
    calculoKelvin2 = (temperatura * 9) / 5 - 459.67;
  
  let mensagem
  // tudo normal
  
  // if (temperatura != Number){
  //     window.alert(`A temperatura ${temperatura} digitada não é um numero`)
  // }
  
     if (atual === "c" && conversao === "f") {
      window.alert(`A temperatura atual em Fahrenheit é ${calculoCelsius1.toFixed(1)}`);
  
    } 
    
    else if (atual === "c" && conversao === "k") {
       window.alert(`A temperatura atual em Kelvin é ${calculoCelsius2}`);
  
         } else if(atual === "c" && conversao === "c"){
          window.alert(`A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
         }
         else if (temperatura || conversao != "k", "f", "c"){
           window.alert('Temperatura digitada não esta presente em nossa tabela')
         }
         
         
         else if (atual === "f" && conversao === "c") {
      window.alert(`A temperatura atual em Celsius é ${calculoFahrenheit1.toFixed(1)}`);
  
    } else if (atual === "f" && conversao === "k") {
      window.alert(`A temperatura atual em Fahrenheit é ${calculoFahrenheit2.toFixed(1)}`);
  
    } else if(atual === "f" && conversao === "f"){
      window.alert(`A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`)
     }
     else if (temperatura||conversao != "k", "f", "c"){
      window.alert('Temperatura digitada não esta presente em nossa tabela')
    }
    
    else if (atual === "k" && conversao === "c") {
      window.alert(`A temperatura atual em Celsius é ${calculoKelvin1.toFixed(1)}`);
  
    } else if (atual === "k" && conversao === "f") {
      window.alert(`A temperatura atual em Fahrenheit é ${calculoKelvin2.toFixed(1)}`);
  
  
    }   else if(atual === "k" && conversao === "k"){
      window.alert(`A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`);
     }
     else if (temperatura||conversao != "k", "f", "c"){
      window.alert('Temperatura digitada não esta presente em nossa tabela')
    }
    //else final
    else {
      window.alert(
        `incapaz de reconhecer, verifique se tudo foi digitado corretamente`
      );
  
    }
}




// if (!isNaN(temperatura)){
 
  
//   if (atual === "c" ) {
//   if (conversao === "f" ){
//     window.alert( (temperatura * 9) / 5 + 32);
//  } 

//  } else if(conversao === "k"){
//    window.alert( temperatura + 273.15);
//  }
//  else if(atual ==="c" && atual ==="c") {
//    window.alert `A temperatura atual (${atual}), não pode ser repetida duas vezes`
//  } else {
//    window.alert `A conversão  desejada não está presente em nosso programa`
//  }
//          // 
//   if (atual === "f" ) {
//   if (conversao === "c" ){
//     window.alert ((temperatura - 32) * 5) / 9
//  } 

//  } else if(conversao === "k"){
//    window.alert  ((temperatura + 459.67) * 5) / 9
//  }
//  else if(atual ==="f" && atual ==="f") {
//    window.alert `A temperatura atual (${atual}), não pode ser repetida duas vezes`
//  } else {
//    window.alert(`A conversão  desejada não está presente em nosso programa`)
//  }
//          // 
//   if (atual === "k" ) {
//   if (conversao === "c" ){
//     window.alert( temperatura - 273.15)
//  } 

//  } else if(conversao === "f"){
//    window.alert ( (temperatura * 9) / 5 - 459.67)
//  }
//  else if(atual ==="k" && atual ==="k") {
//    window.alert `A temperatura atual (${atual}), não pode ser repetida duas vezes`
//  } else {
//    window.alert( `A conversão  desejada não está presente em nosso programa`)
//  }
 
// }

















// Celsius	Fahrenheit	tF = (tC * 9/5) + 32
// Celsius	Kelvin	tK = tC + 273.15
// Fahrenheit	Celsius	tC = (tF - 32) * 5/9
// Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
// Kelvin	Celsius	tC = tK - 273.15
// Kelvin	Fahrenheit	tF = tK * 9/5 - 459.67
   



