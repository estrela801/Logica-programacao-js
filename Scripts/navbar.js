
   const ancoras = [
     { url: "/index.html", texto: "HOME" },
     { url: "/HTML/exercicio1.html", texto: "Exerc-1" },
     { url: "/HTML/Ex2.html", texto: "Exerc-2" },
     { url: "/HTML/Ex3.html", texto: "Exerc-3" },
     { url: "/HTML/Ex4.html", texto: "Exerc-4" },
     { url: "/HTML/Ex5.html", texto: "Exerc-5" },
     { url: "/HTML/Ex6.html", texto: "Exerc-6" },
     { url: "/HTML/Ex7.html", texto: "Exerc-7" },
   ];

function criaButaoSanduba(){
     const butaoDoSanduba = document.createElement('button').innerHTML =  'butao'
}

function criaAncora(url, texto){
     const ancora = document.createElement('a')
     ancora.setAttribute('href', url)
     ancora.innerHTML = texto
     return ancora;
}
function criaLi(ancora){
     const li = document.createElement('li')
     li.appendChild(ancora)
     return li
}
function criaUlNav(ancoras){
          const ul = document.createElement('ul')
          ancoras.forEach(ancora => {
               const a = criaAncora(ancora.url, ancora.texto)
               const li = criaLi(a)
               ul.appendChild(li)
          })
          return ul
}

const divMenu = document.createElement('div')
divMenu.classList.add('migalha-de-pao')
divMenu.appendChild(criaUlNav(ancoras))

const nav = document.createElement('nav')
nav.classList.add('menu-navegacao')
nav.appendChild(divMenu)

const header = document.createElement('header')
header.appendChild(divMenu)

document.body.insertBefore(header, document.body.firstChild)

const linkNavBar = document.createElement('link')
linkNavBar.setAttribute('rel', 'stylesheet')
linkNavBar.setAttribute('href', '../Styles/breadCrumbs.css')
document.head.insertAdjacentElement("beforeEnd", linkNavBar)

document.querySelector('[href="/Styles/responsividade.css"]').insertAdjacentElement('beforebegin', linkNavBar)

document.querySelector('.btn-responsividade').innerHTML = 'Exs'
document.querySelector('.btn-responsividade').setAttribute('onclick', 'mostrar()')