// ESS function declaration
var handburger = document.querySelector('.handburger')
var mobilelinks = document.querySelector('.mobile__link-holder')
var backdrop = document.querySelector('.backdrop')

function Addclass() {
    handburger.classList.toggle('show')
    mobilelinks.classList.toggle('showlinks')
    backdrop.classList.toggle('showlinks')
}