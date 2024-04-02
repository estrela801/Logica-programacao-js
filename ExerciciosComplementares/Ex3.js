let mensagem

function resultadoPartida(time1, time2, gols1,gols2){
        if(gols1 > gols2){
                mensagem = `O time ${time1} 1 está vencendo`
                console.log(mensagem)
        } 
        else if (gols2 > gols1){
                mensagem = `O time ${time2}  2 está vencendo`
        } else {
                mensagem = 'O jogo está empatado'
        }
        return mensagem
                

       
        
}console.log(mensagem)