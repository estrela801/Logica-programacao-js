let mensagem, erro

erro = 'Algo deu errado, por favor verifique se você declarou os números corretamente aaaaaaaaa '
function resultadoPartida(time1, time2, gols1,gols2){
if(time1, time2, gols1,gols2 === null){
        mensagem = 'Por favor digite um número'

        if(gols1 > gols2){
                mensagem = `O ${time1} está vencendo`;
                console.log(mensagem)
        } 
        else if (gols2 > gols1){
                mensagem = `O ${time2} está vencendo`;
        } else {
                mensagem = 'O jogo está empatado';
        }
                
        
        
}

return mensagem ?? erro
}
console.log(gols1)
console.log(gols2)

console.log(time1)
console.log(time2)

console.log(mensagem)