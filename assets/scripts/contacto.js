const botonEnviar = document.getElementById("btn-enviar");

botonEnviar.addEventListener("click", (e) => {
  e.preventDefault();
  alert(
    "Su mensaje ha sido enviado. Pronto nos pondremos en contacto contigo. ¡Muchas Gracias!"
  );
});
