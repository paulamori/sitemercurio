AOS.init({
    duration: 3000, 
    once: true      
});

// Código para o formulário
const botaoEnviar = document.getElementById("botaoEnviar");


if (botaoEnviar) {
    botaoEnviar.addEventListener("click", validaFormulario);
}

function validaFormulario(event) {
    event.preventDefault();
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    if (nome != "" && email != "") {
        alert("Deu tudo certo! Você receberá as novidades por email.");
        document.getElementById("nome").value = "";
        document.getElementById("email").value = "";
    } else {
        alert("Por favor, preencha todos os campos.");
    }
}

// Código apenas para a página inicial
const botoes = document.querySelectorAll(".menuprincipal button");

if (botoes.length > 0) {
    botoes[0].addEventListener("click", function() {
        window.location.href = "pagina1.html";
    });

    botoes[1].addEventListener("click", function() {
        window.location.href = "pagina2.html";
    });

    botoes[2].addEventListener("click", function() {
        window.location.href = "pagina3.html";
    });
}