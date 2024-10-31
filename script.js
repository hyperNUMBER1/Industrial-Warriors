// script.js

// Efeito de fade-in ao rolar a página
document.addEventListener("DOMContentLoaded", () => {
    const elementos = document.querySelectorAll("main, .menu-lateral, footer");

    const opcoes = {
        threshold: 0.1,
    };

    const observer = new IntersectionObserver((entradas) => {
        entradas.forEach((entrada) => {
            if (entrada.isIntersecting) {
                entrada.target.classList.add("show");
            }
        });
    }, opcoes);

    elementos.forEach((el) => observer.observe(el));
});

// Animação para destacar o botão clicado
document.querySelectorAll(".botao-interativo, .botao-jogar").forEach(button => {
    button.addEventListener("click", () => {
        button.classList.add("clicked");
        setTimeout(() => button.classList.remove("clicked"), 300);
    });
});
document.addEventListener("DOMContentLoaded", function () {
    // Remove o loader após carregamento
    const loader = document.getElementById("loader");
    setTimeout(() => loader.style.display = "none", 1000);
});
// Função para aplicar o tema
function applyTheme() {
    const theme = localStorage.getItem('theme');
    if (theme === 'light') {
        document.body.classList.add('light-mode');
        document.getElementById('toggle-button').innerHTML = '☀️ Mudar para Modo Escuro';
    } else {
        document.body.classList.remove('light-mode');
        document.getElementById('toggle-button').innerHTML = '🌙 Mudar para Modo Claro';
    }
}

// Aplicar tema ao carregar a página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();

    const button = document.getElementById('toggle-button');
    button.addEventListener('click', () => {
        // Alterna a classe e armazena o tema no localStorage
        document.body.classList.toggle('light-mode');
        const isLightMode = document.body.classList.contains('light-mode');
        localStorage.setItem('theme', isLightMode ? 'light' : 'dark');
        applyTheme();
    });
});