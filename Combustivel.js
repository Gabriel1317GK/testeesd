
  document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault();{ // Impede o envio do formulário padrão
 
      // Realiza o redirecionamento apenas se todos os campos estiverem preenchidos
      var urlRedirecionamento = "linkdeEnvio.html";
      window.location.href = urlRedirecionamento;
    }
  });
  
  // <------------ DATA -------------> //
  
  window.onload = function() {
  };
  
  // -------------------------------- //