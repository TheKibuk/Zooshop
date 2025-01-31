const header = document.querySelector('.header');
const first = document.querySelector('.pronas');
const scrollItems = document.querySelectorAll('.scrollItem');
const burger = document.getElementById('burger')
const nav = document.getElementById('nav')
const headerHeight = header.offsetHeight;
const firstHeight = first.offsetHeight;

burger.addEventListener('click', function(){
    nav.classList.toggle('nav--active')
    document.body.classList.toggle('stop--scroll')
})

const scrollAnimation = () =>{
    let windowCenter = (window.innerHeight / 2) + window.scrollY;
    scrollItems.forEach(el => {
        let scrollOffset = el.offsetTop + (el.offsetHeight / 2);
        if(windowCenter >= scrollOffset) {
            el.classList.add('animation-class')
        }
        else{
            el.classList.remove('animation-class')
        }
    })
}

const headerFixed = () => {
    let scrolDistance = window.scrollY;

    if(scrolDistance >= firstHeight / 2 + headerHeight){
        header.classList.add('header-fixed');
        first.style.marginTop = `${headerHeight}px`;

    } else{
        header.classList.remove('header-fixed');
        first.style.marginTop = null;
    }
}
scrollAnimation()
headerFixed()
window.addEventListener('scroll', () => {
    headerFixed()
    scrollAnimation()
})

