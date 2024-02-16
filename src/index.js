function clicarBotao() {
    let inputNomeCompleto = document.getElementsByName('nome-completo');
    let inputEmail = document.getElementsByName('email');
    let inputTelefone = document.getElementsByName('telefone');
    let inputMensagem = document.getElementsByName('mensagem');

    let nomeCompleto = inputNomeCompleto[0].value;
    let email = inputEmail[0].value;
    let telefone = inputTelefone[0].value;
    let mensagem = inputMensagem[0].value;

    let botao = document.getElementById('btn');
    botao.addEventListener("click", trocaCor);
    let inputsVazios = document.querySelector('.input'); //LISTA!
    
    function trocaCor(){
        if(nomeCompleto === '' || email === '' || telefone === '' || mensagem === ''){
            
            inputsVazios.classList.remove("input")
            inputsVazios.classList.add("input-error")
        }
    }
}