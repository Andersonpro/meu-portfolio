var mainSubtitle = document.querySelector('.main-subtitle');
var cont = 0;
var textoMainSubtitle = 'Desenvolvedor Full Stack'
var textoMainSubtitleSpan = '';
var reverseAnimationMainSubtitle = false;
var timeAnimation = 150;

window.addEventListener('load', () => {
    criaTextoComSpan();
})

function criaTextoComSpan() {
    for (let i = 0; i < textoMainSubtitle.length; i++) {
        textoMainSubtitleSpan += `<span>${textoMainSubtitle.charAt(i)}</span>`;
    }
    mainSubtitle.innerHTML = textoMainSubtitleSpan;
}

var idInverval = setInterval(animacaoSubtitle, timeAnimation)

function animacaoSubtitle() {
    if (!reverseAnimationMainSubtitle) {
        mainSubtitle.children[cont].classList.add('main-subtitle-animation');
        if (cont < textoMainSubtitle.length - 1) {
            cont++;
        }
        else {
            reverseAnimationMainSubtitle = true;
            clearInterval(idInverval);
            timeAnimation = 30;
            setTimeout(() => {
                idInverval = setInterval(animacaoSubtitle, timeAnimation);
            }, 3000)
        }
    }
    else {
        mainSubtitle.children[cont].classList.remove('main-subtitle-animation');
        if (cont > 0) {
            cont--;
        }
        else {
            reverseAnimationMainSubtitle = false;
            clearInterval(idInverval);
            timeAnimation = 150;
            setTimeout(() => {
                idInverval = setInterval(animacaoSubtitle, timeAnimation);
            }, 3000)
        }
    }
}

