function toggleMenu() {
  const nav = document.getElementById('navlinks');
  if (nav) nav.classList.toggle('open');
}
function enviarConsultaOperaciones(e) {
  e.preventDefault();
  const empresa = document.getElementById('f_empresa').value;
  const contacto = document.getElementById('f_contacto').value;
  const sedes = document.getElementById('f_sedes').value;
  const interes = document.getElementById('f_interes').value;
  const mensaje = document.getElementById('f_mensaje').value;

  let texto = "Hola LOOKBEN! Soy " + contacto + " de " + empresa + ".\n" +
              "Sedes: " + sedes + "\n" +
              "Interes: " + interes + "\n" +
              "Consulta: " + mensaje;
  window.open("https://wa.me/5493624313645?text=" + encodeURIComponent(texto), '_blank');
  return false;
}
