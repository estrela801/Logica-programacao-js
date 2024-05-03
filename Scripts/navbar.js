const home = criaAncora('index.html', 'HOME')     
const aExercicio1 = criaAncora('Ex1.html', 'Exercicio 1')
const aExercicio2 = criaAncora('Ex2.html', 'Exercicio 2')
const aExercicio3 = criaAncora('Ex3.html', 'Exercicio 3')
const aExercicio4 = criaAncora('Ex4.html', 'Exercicio 4')
const aExercicio5 = criaAncora('Ex5.html', 'Exercicio 5')
const aExercicio6 = criaAncora('Ex6.html', 'Exercicio 6')
const aExercicio7 = criaAncora('Ex7.html', 'Exercicio 7')



// const aexercicio2 = document.createElement('a')
// aexercicio2.setAttribute('href', 'Ex2.html')
// aexercicio2.innerHTML = 'Exercicio 2'



// const aexercicio3 = document.createElement('a')
// aexercicio3.setAttribute('href', 'Ex3.html')
// aexercicio3.innerHTML = 'Exercicio 3'


// const aexercicio4 = document.createElement('a')
// aexercicio4.setAttribute('href', 'Ex4.html')
// aexercicio4.innerHTML = 'Exercicio 4'


// const aexercicio5 = document.createElement('a')
// aexercicio5.setAttribute('href', 'Ex5.html')
// aexercicio5.innerHTML = 'Exercicio 5'


// const aexercicio6 = document.createElement('a')
// aexercicio6.setAttribute('href', 'Ex6.html')
// aexercicio6.innerHTML = 'Exercicio 6'


// const aexercicio7 = document.createElement('a')
// aexercicio7.setAttribute('href', 'Ex7.html')
// aexercicio7.innerHTML = 'Exercicio 7'

const liHome = criaLi(home)
const liExercicio1 = criaLi(aExercicio1)
const liExercicio2 = criaLi(aExercicio2)
const liExercicio3 = criaLi(aExercicio3)
const liExercicio4 = criaLi(aExercicio4)
const liExercicio5 = criaLi(aExercicio5)
const liExercicio6 = criaLi(aExercicio6)
const liExercicio7 = criaLi(aExercicio7)



// const liExercicio3 = document.createElement('li')
// liExercicio3.appendChild(aexercicio3)



// const liExercicio4 = document.createElement('li')
// liExercicio4.appendChild(aexercicio4)



// const liExercicio5 = document.createElement('li')
// liExercicio5.appendChild(aexercicio5)



// const liExercicio6 = document.createElement('li')
// liExercicio6.appendChild(aexercicio6)

//const liExercicio7 = document.createElement('li')
// liExercicio7.appendChild(aexercicio7)




// const liExercicio = document.createElement('li')
// liExercicio.appendChild(aExercicio1)



const ulNav = document.createElement('ul')
ulNav.append(liHome, liExercicio1, liExercicio2, liExercicio3, liExercicio4, liExercicio5, liExercicio6, liExercicio7)


const divMenu = document.createElement('div')
divMenu.classList.add('migalha-de-pao')
divMenu.appendChild(ulNav)






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