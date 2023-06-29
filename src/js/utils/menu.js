const menu = document.querySelector('.menu');
const burger = document.querySelector('.header__burger');
const menuLinks = document.querySelectorAll('.menu li a');

if (burger) {
    burger.addEventListener('click', (е) => {
        menu.classList.add('_active');
        document.body.classList.add('_noscroll');
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        link.addEventListener('click', (е) => {
            burger.classList.remove('_active');
            menu.classList.remove('_active');
            document.body.classList.remove('_noscroll');
        })
    })
}


document.addEventListener('click', function (e) {
    let targetEl = e.target;

    if (targetEl.classList.contains('_side-fixed')) {
        targetEl.classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }

    if (targetEl.classList.contains('_side-fixed__close')) {
        targetEl.closest('._side-fixed').classList.remove('_active');
        document.body.classList.remove('_noscroll');
    }
})


const heroSidebar = document.querySelector('.hero__sidebar nav ul');
const h2Titles = document.querySelectorAll('h2');

if (heroSidebar && h2Titles.length) {
    h2Titles.forEach(h2 => {
        const text = h2.textContent.toLocaleLowerCase();

        h2.id = text.replace(/\n\s+/gi, ' ')

        const anchor = `<li><a href="#${text}">${h2.textContent}</a></li>`
        heroSidebar.insertAdjacentHTML('beforeend', anchor)
    })
}