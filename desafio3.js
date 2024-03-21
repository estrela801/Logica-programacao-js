function calculeConversao(temperatura, atual, conversao){


  // const temperatura = parseFloat(window.prompt("Digite a temperatura")),
  //   atual = window.prompt("Digite a escala atual, Celsius (c), Fanrenheit (f) e Kelvin (k)"),
  //   conversao = window.prompt("Digite a unidade desejada, Celsius (c), Fahrenheit (f) ou Kelvin (k)");
  
  
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
      mensagem = `A temperatura atual em Fahrenheit é ${calculoCelsius1.toFixed(1)}`;
  
    } 
    
    else if (atual === "c" && conversao === "k") {
       mensagem = `A temperatura atual em Kelvin é ${calculoCelsius2}`;
  
         } else if(atual === "c" && conversao === "c"){
          mensagem = `A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`
         }
         else if (temperatura || conversao != "k", "f", "c"){
           mensagem = 'Temperatura digitada não esta presente em nossa tabela';
         }
         
         
         else if (atual === "f" && conversao === "c") {
      mensagem = `A temperatura atual em Celsius é ${calculoFahrenheit1.toFixed(1)}`;
  
    } else if (atual === "f" && conversao === "k") {
      mensagem = `A temperatura atual em Fahrenheit é ${calculoFahrenheit2.toFixed(1)}`;
  
    } else if(atual === "f" && conversao === "f"){
      mensagem = `A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`
     }
     else if (temperatura||conversao != "k", "f", "c"){
      mensagem = 'Temperatura digitada não esta presente em nossa tabela'
    }
    
    else if (atual === "k" && conversao === "c") {
      mensagem = `A temperatura atual em Celsius é ${calculoKelvin1.toFixed(1)}`;
  
    } else if (atual === "k" && conversao === "f") {
      mensagem = `A temperatura atual em Fahrenheit é ${calculoKelvin2.toFixed(1)}`;
  
  
    }   else if(atual === "k" && conversao === "k"){
      mensagem = `A escala selecionada ${conversao}. Selecione uma escala de CONVERSÃO diferente da ATUAL.`;
     }
     else if (temperatura||conversao != "k", "f", "c"){
      mensagem = 'Temperatura digitada não esta presente em nossa tabela';
    }
    //else final
    else {
      mensagem =
        `incapaz de reconhecer, verifique se tudo foi digitado corretamente`
      ;
  
    }

    return 
}
const final = calculeConversao;

console.log(final)




// Celsius	Fahrenheit	tF = (tC * 9/5) + 32
// Celsius	Kelvin	tK = tC + 273.15
// Fahrenheit	Celsius	tC = (tF - 32) * 5/9
// Fahrenheit	Kelvin	tK = (tF + 459.67) * 5/9
// Kelvin	Celsius	tC = tK - 273.15
// Kelvin	Fahrenheit	tF = tK * 9/5 - 459.67
   



