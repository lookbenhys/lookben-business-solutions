/* Envío de Consulta de Seguridad e Higiene */
function enviarConsultaHyS(event) {
  event.preventDefault();

  const nombre = document.getElementById('hys_nombre').value.trim();
  const tel = document.getElementById('hys_tel').value.trim();
  const servicio = document.getElementById('hys_servicio').value;
  const mensaje = document.getElementById('hys_mensaje').value.trim();

  let texto = `Hola LOOKBEN! Mi nombre es *${nombre}*.\n\n`;
  texto += `📞 *Teléfono:* ${tel}\n`;
  texto += `🛡️ *Servicio de interés:* ${servicio}\n`;
  if (mensaje) {
    texto += `💬 *Consulta:* ${mensaje}\n\n`;
  } else {
    texto += `\n`;
  }
  texto += `Quisiera solicitar asesoramiento y cotización.`;

  const telefonoLOOKBEN = "5493624313645";
  const urlWhatsApp = `https://wa.me/${telefonoLOOKBEN}?text=${encodeURIComponent(texto)}`;

  window.open(urlWhatsApp, '_blank');
  return false;
}
