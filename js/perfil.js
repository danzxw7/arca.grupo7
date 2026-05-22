const form = document.getElementById("perfilForm");

form.addEventListener("submit", function(event){
    event.preventDefault();

    const nome = document.getElementById("nome").value;

    alert("Até logo, " + nome + "!");
});