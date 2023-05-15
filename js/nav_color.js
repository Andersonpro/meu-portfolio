const sectionsArray = document.querySelectorAll('section');
const navItensArray = document.querySelectorAll('[data-nav]');
const pageTop = document.querySelector('.page-top');
pageTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})
var verificador = 0;
navItensArray[0].classList.add('nav-active');

window.addEventListener('scroll', () => {
    const posAtual = window.pageYOffset;
    if (posAtual < sectionsArray[0].offsetHeight / 4) {
        navItensArray[0].classList.add('nav-active');
        verificador = 0;
    }
    else if ((posAtual < sectionsArray[1].offsetTop + sectionsArray[1].offsetHeight / 4) && (posAtual > sectionsArray[1].offsetTop - sectionsArray[1].offsetHeight / 4)) {
        navItensArray[1].classList.add('nav-active');
        verificador = 1;
    }
    else if ((posAtual < sectionsArray[2].offsetTop + sectionsArray[2].offsetHeight / 4) && (posAtual > sectionsArray[2].offsetTop - sectionsArray[2].offsetHeight / 4)) {
        navItensArray[2].classList.add('nav-active');
        verificador = 2;
    }
    else if ((posAtual < sectionsArray[3].offsetTop + sectionsArray[3].offsetHeight / 4) && (posAtual > sectionsArray[3].offsetTop - sectionsArray[3].offsetHeight / 4)) {
        navItensArray[3].classList.add('nav-active');
        verificador = 3;
    }
    else if ((posAtual < sectionsArray[4].offsetTop + sectionsArray[4].offsetHeight / 4) && (posAtual > sectionsArray[4].offsetTop - sectionsArray[4].offsetHeight / 4)) {
        navItensArray[4].classList.add('nav-active');
        verificador = 4;
    }

    for (let i = 0; i < navItensArray.length; i++) {
        if (i != verificador) {
            navItensArray[i].classList.remove('nav-active');
        }

    }
})