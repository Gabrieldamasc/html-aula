function definirModoPorHora() {
    const body = document.getElementById('body-mode-var');
    const hora = new Date().getHours();

    if (hora >= 6 && hora < 18) {
        // Dia: Aplica estilos para o modo claro
        body.classList.remove('modo-noturno');
        body.classList.add('modo-diurno');
    } else {
        // Noite: Aplica estilos para o modo escuro (noturno)
        body.classList.remove('modo-diurno');
        body.classList.add('modo-noturno');
    }
}

// Chama a função assim que a página carrega
window.onload = definirModoPorHora;

// Opcional: Chama a função novamente a cada minuto para atualizar a cor dinamicamente
// setInterval(definirModoPorHora, 60000);