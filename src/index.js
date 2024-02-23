const camposFormulario = document.querySelectorAll('.campo')
const botaoEnviar = document.querySelector('.btn')

botaoEnviar.addEventListener('click', (e) => {
    e.preventDefault()

    camposFormulario.forEach((input) => {
        if(input.value){
            input.classList.add('valido')
            input.nextElementSibling.classList.remove('mostrar')
        } else {
            input.classList.remove('valido')
            input.classList.add('erro')
            input.nextElementSibling.classList.add('mostrar')
        }
    })
})






array = ['banana', 'morango', 'manga']
array.forEach(element => {
    console.log(element.nextElementSibling)
});












// function clicarBotao() {
//     let inputNomeCompleto = document.getElementsByName('nome-completo');
//     let inputEmail = document.getElementsByName('email');
//     let inputTelefone = document.getElementsByName('telefone');
//     let inputMensagem = document.getElementsByName('mensagem');

//     let nomeCompleto = inputNomeCompleto[0].value;
//     let email = inputEmail[0].value;
//     let telefone = inputTelefone[0].value;
//     let mensagem = inputMensagem[0].value;

//     let botao = document.getElementById('btn');
//     let inputNomeVazio = document.querySelector('.nome'); 
//     let inputEmailVazio = document.querySelector('.email'); 
//     let inputTelefoneVazio = document.querySelector('.telefone'); 
//     let inputMensagemVazio = document.querySelector('.mensagem');

//     let campoObrigatorio1 = document.querySelector('.obrigatorio-1');
//     let campoObrigatorio2 = document.querySelector('.obrigatorio-2');
//     let campoObrigatorio3 = document.querySelector('.obrigatorio-3');
//     let campoObrigatorio4 = document.querySelector('.obrigatorio-4');

//     if(nomeCompleto === '' || email === '' || telefone === '' || mensagem === ''){
//         inputNomeVazio.classList.remove("nome");
//         inputNomeVazio.classList.add("input-error");

//         campoObrigatorio1.classList.remove("obrigatorio-1")
//         campoObrigatorio1.classList.add("obrigatorio-aparece")


//         inputEmailVazio.classList.remove("email");
//         inputEmailVazio.classList.add("input-error");

//         campoObrigatorio2.classList.remove("obrigatorio-2")
//         campoObrigatorio2.classList.add("obrigatorio-aparece")


//         inputTelefoneVazio.classList.remove("telefone");
//         inputTelefoneVazio.classList.add("input-error");

//         campoObrigatorio3.classList.remove("obrigatorio-3")
//         campoObrigatorio3.classList.add("obrigatorio-aparece")



//         inputMensagemVazio.classList.remove("mensagem");
//         inputMensagemVazio.classList.add("input-mensagem-error");

//         campoObrigatorio4.classList.remove("obrigatorio-4")
//         campoObrigatorio4.classList.add("obrigatorio-aparece")
        

//     }else{
//         console.log(nomeCompleto)
//         console.log(email)
//         console.log(telefone)
//         console.log(mensagem)
//     }
    
    // botao.addEventListener("click", trocaCor);
    // function trocaCor(){
    //     if(nomeCompleto === '' || email === '' || telefone === '' || mensagem === ''){
            
    //         inputsVazios.classList.remove("input");
    //         inputsVazios.classList.add("input-error");

    //         campoObrigatorio.remove("obrigatorio");
    //         campoObrigatorio.add("obrigatorio-aparece");
    //     }else{
    //         console.log(nomeCompleto)
    //         console.log(email)
    //         console.log(telefone)
    //         console.log(mensagem)
    //     }
    // }
// }