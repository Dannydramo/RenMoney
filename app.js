const navbar = document.querySelector('.navbar')

document.addEventListener('scroll', ()=>{
    if (window.scrollY >=80) {
        navbar.classList.add('navBar')
    }
    else{
        navbar.classList.remove('navBar')
    }
})

const openMenu = document.querySelector('.openmenu')
const closeMenu = document.querySelector('.closemenu')
const listitem = document.querySelector('.list_item')

openMenu.addEventListener('click', ()=>{
    listitem.classList.add('show_list')
    setTimeout(()=>{
        closeMenu.style.display = 'block'
    },1000)
})

closeMenu.addEventListener('click', ()=>{
    listitem.classList.remove('show_list')
    
        closeMenu.style.display = 'none'
})