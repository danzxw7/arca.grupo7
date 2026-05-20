const form = document.querySelector(".form-pet");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nomePet = document.getElementById("nomePet").value.trim();
    const nomeTutor = document.getElementById("nomeTutor").value.trim();

    if (nomePet === "" || nomeTutor === "") {
        alert("Preencha os campos obrigatórios!");
        return;
    }

    alert("Pet registrado com sucesso!");
});