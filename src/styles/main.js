const cards = document.querySelectorAll('.card-square');

let idiomaAtual = 'pt';
let traducoes = {};

async function carregarTraducoes() {
    const res = await fetch('src/files/traducoes.json');
    traducoes = await res.json();
    aplicarTraducoes();
}

function aplicarTraducoes() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const chave = el.getAttribute('data-i18n');
        el.textContent = traducoes[idiomaAtual][chave] || `[${chave}]`;
    });
}

function trocarIdioma() {
    idiomaAtual = idiomaAtual === 'pt' ? 'en' : 'pt';
    aplicarTraducoes();
    console.log(idiomaAtual)
}

window.onload = carregarTraducoes;


cards.forEach(card => {
    card.addEventListener('click', () => {
        const url = card.getAttribute('data-url');
        if (!url || url === 'javascript:void(0)') {
            e.preventDefault(); 
            return;
        }
        window.open(url, '_blank');
    });
});


document.getElementById('botaoDownload').addEventListener('click', () => {
    if (idiomaAtual === 'pt') {
        window.open("src/files/Currículo, Leonardo Scheffer Saraiva.pdf", "_blank");
    }
    else {
        window.open("src/files/Resume, Leonardo Scheffer Saraiva.pdf", "_blank");
    }
});