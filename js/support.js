const burger = document.getElementById('burger')
const nav = document.getElementById('nav')

burger.addEventListener('click', function(){
    nav.classList.toggle('nav--active')
    document.body.classList.toggle('stop--scroll')
})