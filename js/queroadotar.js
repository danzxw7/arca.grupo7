const formulario = document.getElementById("form-adocao");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert(
        "Seu pedido de adoção foi enviado com sucesso! Obrigado ❤️"
    );

    formulario.reset();

});