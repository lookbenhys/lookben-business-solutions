/* Control de Menú Móvil */
function toggleMenu() {
  const navLinks = document.getElementById('navlinks');
  if (navLinks) {
    navLinks.classList.toggle('open');
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.getElementById('navlinks');
  if (navLinks) {
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }
});

/* Envío de Consulta a WhatsApp */
function enviarConsultaOperaciones(event) {
  event.preventDefault();

  const empresa = document.getElementById('f_empresa').value.trim();
  const contacto = document.getElementById('f_contacto').value.trim();
  const sedes = document.getElementById('f_sedes').value;
  const interes = document.getElementById('f_interes').value;
  const mensaje = document.getElementById('f_mensaje').value.trim();

  let texto = `Hola LOOKBEN! Mi nombre es ${contacto}, de la empresa *${empresa}*.\n\n`;
  texto += `📍 *Estructura:* ${sedes}\n`;
  texto += `🎯 *Interés:* ${interes}\n`;
  if (mensaje) {
    texto += `💬 *Consulta:* ${mensaje}\n\n`;
  } else {
    texto += `\n`;
  }
  texto += `Quisiera coordinar una reunión para evaluar nuestra operación.`;

  const telefonoLOOKBEN = "5493624313645";
  const urlWhatsApp = `https://wa.me/${telefonoLOOKBEN}?text=${encodeURIComponent(texto)}`;

  window.open(urlWhatsApp, '_blank');
  return false;
}
