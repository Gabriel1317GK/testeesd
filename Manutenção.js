function mostrarCampoExtra() {
  var select = document.getElementById("opcao");
  var campoExtra = document.getElementById("campo-extra");
  

  if (select.value == "3") {
    campoExtra.style.display = "block";
    document.getElementById("campo-adicional").setAttribute("required", "required");
  } else {
    campoExtra.style.display = "none";
    document.getElementById("campo-adicional").removeAttribute("required");
    document.getElementById("campo-adicional-error").style.display = "none";
  }
}

document.getElementById("meuFormulario").addEventListener("submit", function(event) {
  event.preventDefault(); // Impede o envio do formulário padrão

  var campoAdicional = document.getElementById("campo-adicional");

  if (campoAdicional.hasAttribute("required") && campoAdicional.value.trim() === "") {
    document.getElementById("campo-adicional-error").style.display = "block";
  } else {
    // Realiza o redirecionamento apenas se todos os campos estiverem preenchidos
    var urlRedirecionamento = "linkdeEnvio.html";
    window.location.href = urlRedirecionamento;
  }
});


// <------------ DATA -------------> //

window.onload = function() {
};

// -------------------------------- //