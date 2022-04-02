
function openNav(){
    document.getElementById("myNav").style.width="100%"

    let btn = document.querySelector('.nav-button')
    btn.style.backgroundColor='white'

    let msg = document.querySelector('.msgWelcome')
    msg.textContent=''
}

function closeNav(){
    document.getElementById("myNav").style.width="0"
    
    let btn = document.querySelector('.nav-button')
    btn.style.backgroundColor=''

    let msg = document.querySelector('.msgWelcome')
    msg.innerHTML = `<h1>SEJA BEM VINDO(A) NOVAMENTE</h1>`
}

