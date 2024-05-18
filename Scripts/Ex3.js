


function resultadoPartida(time1, time2, gols1,gols2){
if(time1, time2, gols1,gols2 === ''){
        let mensagem 
}else{
        
        if(gols1 > gols2){
                mensagem = `O ${time1} está vencendo`;
                console.log(mensagem)
        } 
        else if (gols2 > gols1){
                mensagem = `O ${time2} está vencendo`;
        } else {
                mensagem = 'O jogo está empatado';
        }
        return mensagem  
}

}


