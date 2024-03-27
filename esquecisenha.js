

      function verificarFormulario() {
         var email = document.getElementById("email").value;

     if (email !== '') {       
         window.location.href = "textoredifinição.html";
     } 
    
     else {
        alert("Por favor, preencha com seu e-mail que foi cadastrado.");
     }
  }  
         document.getElementById("enviar").addEventListener("click", verificarFormulario);