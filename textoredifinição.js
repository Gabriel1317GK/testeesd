document.addEventListener("DOMContentLoaded", function() {
  var successMessage = document.getElementById("success-message");

  // Mostra a mensagem de sucesso após um breve atraso
  setTimeout(function() {
    successMessage.style.opacity = "1";
  }, 1000);
});
