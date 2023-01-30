let menu = document.querySelector('#menu-icon')
let navlinks = document.querySelector('.nav-links')

// menu.onclick = () => {
//     menu.className.toggle('bx-x')
//     navlinks.className.toggle('active')
// }

window.onscroll = () => {
    menu.className.remove('bx-x')
    navlinks.className.remove('active')
}