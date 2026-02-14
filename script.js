document.getElementById('startButton').addEventListener('click', function () {
    // Esconder a tela de introdução
    document.querySelector('.intro').style.display = 'none';
    
    // Mostrar o painel
    let painel = document.getElementById('painel');
    painel.classList.remove('hidden');
    
    // Mensagem de amor para Morena
    const mensagem = `
    Morena,

    Desde a primeira vez que te vi senti que você era uma mulher fenomenal,
    não só em aparência mas como pessoa. Me alegra ver você conquistar suas metas.
    Quero poder te proporcionar uma felicidade, quero fazer você ser muito amada e se sentir cuidada.

    Eu te amo mais do que qualquer sistema possa processar.
    `;
    
    // Exibir mensagem gradualmente
    let mensagemDiv = document.getElementById('mensagem');
    let i = 0;
    function escreveMensagem() {
        if (i < mensagem.length) {
            mensagemDiv.innerHTML += mensagem.charAt(i);
            i++;
            setTimeout(escreveMensagem, 50);
        }
    }

    escreveMensagem();

    // Exibir coração em ASCII
    const coracaoASCII = [
        "   ******       ******   ",
        " **********   ***********  ",
        "************* *************",
        "***************************",
        " ************************* ",
        "  ***********************  ",
        "   *********************   ",
        "     *****************     ",
        "       *************       ",
        "         *********         ",
        "           *****           ",
        "             *             "
    ];

    let coracaoDiv = document.getElementById('coracao');
    let linhaIndex = 0;

    function desenhaCoracao() {
        if (linhaIndex < coracaoASCII.length) {
            coracaoDiv.innerHTML += `<div>${coracaoASCII[linhaIndex]}</div>`;
            linhaIndex++;
            setTimeout(desenhaCoracao, 200);
        }
    }

    desenhaCoracao();
});
