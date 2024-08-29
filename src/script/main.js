document.addEventListener("DOMContentLoaded", function() {
    // Seleciona todos os botões de abas
    const buttons = document.querySelectorAll('[data-tab-button]');
    const questions = document.querySelectorAll('[data-faq-question]');

    // Adiciona um evento de clique a cada botão
    buttons.forEach(button => {
        button.addEventListener("click", function(event) {
            // Obtém o alvo da aba a partir do botão clicado
            const abaAlvo = event.target.dataset.tabButton;
            const aba = document.querySelector(`[data-tab-id="${abaAlvo}"]`);
            
            // Esconde todas as abas
            escondeTodasAbas();
            
            // Mostra a aba correspondente
            aba.classList.add('shows__list--is-active');
            
            // Remove a classe ativa de todos os botões
            removeBotaoAtivo();
            
            // Adiciona a classe ativa ao botão clicado
            event.target.classList.add('shows__tabs__button--is-active');
        });
    });
    for (let i = 0; i < questions.length; i++) {
        questions[i].addEventListener('click', abreOuFechaResposta);
    }
});

    function abreOuFechaResposta(elemento){
        const classe = 'faq__questions__item--is-open';
        console.log(elemento);
        const elementoPai =elemento.target.parentNode;

        elementoPai.classList.toggle(classe);
    }
// Função para remover a classe ativa de todos os botões
function removeBotaoAtivo(){
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('shows__tabs__button--is-active');
    }
}

// Função para esconder todas as abas
function escondeTodasAbas() {
    const tabs = document.querySelectorAll('[data-tab-id]');
    tabs.forEach(tab => {
        tab.classList.remove('shows__list--is-active');
    });
}
