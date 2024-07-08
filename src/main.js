document.addEventListener("DOMContentLoaded", function() {
    const buttons =document.querySelectorAll('[data-tab-button]');
    const tabsContainer = document.querySelector('[data-tab-id]');
        
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener("click", function(botao){
                const abaAlvo = botao.target.dataset.tabButton;
            })
        }



});