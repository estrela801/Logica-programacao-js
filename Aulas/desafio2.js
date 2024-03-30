function calculeIMC(peso, altura) {

    const imc = peso / (altura ** 2);
    let mensagem;

    if (imc <= 18.5) {
        mensagem = `Abaixo do peso IMC: ${imc.toFixed(1)}`;
    } else if (imc <= 25) {
        mensagem = `Peso normal IMC: ${imc.toFixed(1)}`;
    }
    else if (imc <= 30) {
        mensagem = `Sobrepeso IMC: ${imc.toFixed(1)}`;
    } else if (imc <= 35) {
        mensagem = `Obesidade grau 1 IMC: ${imc.toFixed(1)}`;
    } else if (imc <= 40) {
        mensagem = `Obesidade grau 2 IMC: ${imc.toFixed(1)}`;
    } else {
        mensagem = `Obesidade grau 3 IMC: ${imc.toFixed(1)}`;
    }

    return mensagem;

}

