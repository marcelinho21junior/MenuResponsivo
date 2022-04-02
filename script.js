
function openNav(){
    document.getElementById("myNav").style.width="100%"

    let btn = document.querySelector('.nav-button')
    btn.style.backgroundColor='white'
}

function closeNav(){
    document.getElementById("myNav").style.width="0"
    
    let btn = document.querySelector('.nav-button')
    btn.style.backgroundColor=''
}