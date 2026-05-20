const botaoUpload = document.getElementById("btnUpload");
const inputArquivo = document.getElementById("arquivo");
const textoArquivo = document.getElementById("textoArquivo");

botaoUpload.addEventListener("click", () => {
    inputArquivo.click();
});

inputArquivo.addEventListener("change", () => {

    if(inputArquivo.files.length > 0){

        textoArquivo.innerText =
            inputArquivo.files.length + " arquivo(s) selecionado(s)";

    }else{

        textoArquivo.innerText =
            "Nenhum arquivo selecionado";
    }
});

document.getElementById("enviar")
.addEventListener("click", () => {

    alert("Denúncia enviada com sucesso!");

});