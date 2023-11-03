console.log('thi ia a laboretry')
// document.getElementById('xmarkbtn').style.display = 'none'
document.getElementById('icon').addEventListener('click', () => {
    if (navbar.style.transform != 'translate(0px, -350px)') {
        navbar.style.transform = 'translate(0px, -350px)'
        barsbtn.classList.remove('fa-xmark')
        setTimeout(() => {
            barsbtn.classList.add('fa-bars')
        }, 500);
    } else {
        navbar.style.transform = 'translate(0px, 0px)'
        barsbtn.classList.remove('fa-bars')
        barsbtn.classList.add('fa-xmark')
    }
})

function section() {
    // transform: translate(0vh, 50vh);
    startpage.style.transform = 'translate(0vh, 0vh)'
}

function stn() {
    // transform: translate(0vh, 50vh);
    startpage.style.transform = 'translate(0vh, 70vh)'
}
