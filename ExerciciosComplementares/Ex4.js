// Desenvolva um programa que permita a leitura dos nomes de 10 pessoas e armazene os nomes lidos em um vetor. Após isso, o programa deve pertmitir a leitura de mais um nome qualquer para ser efetuada uma busca entre os nomes inseridos anteriormente. O programa deve exibir a mensagem ACHEI caso encontre o nome e NÃO ACHEI caso não encontre o nome.

let nomes = document.querySelector('#name').value ;

function ArmazenaNome(_name) {

    nomes.push(document.querySelector("#name"))
	console.log(nomes);
}

function verificacaoNome() {
	nomes.includes(document.querySelector("#VerificaNome"));
	console.log(nomes);
}
