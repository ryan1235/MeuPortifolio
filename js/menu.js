const btnMobile = document.getElementById('btn')
const btnMobileA = document.getElementById('btn-A')
const btnMobileB = document.getElementById('btn-B')
const btnMobileC = document.getElementById('btn-C')
const btnMobileD = document.getElementById('btn-D')
const btnMobileE = document.getElementById('btn-E')

function togglemenu(){
    const navmobile = document.getElementById('navmobile')
    navmobile.classList.toggle('active')
    btnMobile.classList.toggle('active')
}

btnMobile.addEventListener('click', togglemenu)
btnMobileA.addEventListener('click', togglemenu)
btnMobileB.addEventListener('click', togglemenu)
btnMobileC.addEventListener('click', togglemenu)
btnMobileD.addEventListener('click', togglemenu)
btnMobileE.addEventListener('click', togglemenu)
 