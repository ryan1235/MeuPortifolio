const btnMobile = document.getElementById('btn')

function togglemenu(){
    const navmobile = document.getElementById('navmobile')
    navmobile.classList.toggle('active')
}

btnMobile.addEventListener('click', togglemenu)