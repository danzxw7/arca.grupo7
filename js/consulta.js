const form = document.getElementById("consultaForm");

form.addEventListener("submit", function(event){
  event.preventDefault();

  alert("Consulta agendada com sucesso!");
});