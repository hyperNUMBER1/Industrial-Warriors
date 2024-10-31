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

    // Alternância de modo escuro
    const toggleThemeBtn = document.getElementById("toggleTheme");
    toggleThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});
function toggleMode() {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
}