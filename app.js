/* ===== Modal de Servicios (Higiene y Seguridad) ===== */
const SERVICIOS = [
  {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4 L40 9 v13 c0 11-7 18-16 21-9-3-16-10-16-21V9Z"/><path d="M17 24 l5 5 9-11"/></svg>', title:'Estudio de Seguridad', intro:'El documento clave para habilitar o renovar tu local ante el Municipio.', que:'Es un informe técnico que verifica que tu local cumple las condiciones de seguridad exigidas (Ley 7467). Lo firma un profesional matriculado y se visa en COPAIPA.', incluye:['Relevamiento integral y archivo fotográfico','Evaluación de riesgo de incendio y carga de fuego','Estudio de evacuación y medios de escape','Plan de emergencia','Planos normalizados (Res. 131/09)','Firma profesional y gestión del visado COPAIPA'], para:'Todo local que recibe público y necesita habilitación nueva o renovación.', tags:['Ley 7467','Visado COPAIPA','Res. 116/12']},
  {color:'#EFA27F', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 4c2 7 10 9 10 18a10 10 0 0 1-20 0c0-4 2-6 3-8 1 3 3 3 3 3 0-6 3-9 4-13Z"/></svg>', title:'Incendios y Bomberos', intro:'Protección contra incendios y cumplimiento de las exigencias de seguridad.', que:'Evaluamos el riesgo de incendio y determinamos las medidas necesarias, con cálculo de carga de fuego y coordinación con Bomberos cuando corresponde.', incluye:['Cálculo de carga de fuego por sector','Determinación de matafuegos (tipo y cantidad)','Verificación de medios de escape','Sistema de detección y alarma (según caso)','Certificación contra incendios','Coordinación con Bomberos'], para:'Locales que requieren certificación de incendios: gastronómicos, depósitos y con público.', tags:['Carga de fuego','Matafuegos','Anexo VII']},
  {color:'#00A79D', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="8" y="6" width="20" height="36" rx="2"/><path d="M28 24h12m0 0-5-5m5 5-5 5"/></svg>', title:'Planes de Evacuación', intro:'Preparación ante emergencias para proteger a las personas.', que:'Diseñamos el plan de autoprotección y evacuación, con roles, recorridos y puntos de encuentro, y capacitamos a tu personal.', incluye:['Plan de autoprotección personalizado','Roles y brigadas de emergencia','Planos con rutas de evacuación','Señalización de emergencia','Organización de simulacros','Documentación del plan'], para:'Escuelas, salones, oficinas, gimnasios y todo local con concurrencia.', tags:['Autoprotección','Simulacros','Brigadas']},
  {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 34a18 18 0 0 1 36 0Z"/><path d="M24 34 34 20"/></svg>', title:'Mediciones de Higiene', intro:'Mediciones técnicas con instrumental calibrado y protocolos oficiales.', que:'Realizamos las mediciones de agentes del ambiente laboral que exige la normativa, con protocolos oficiales.', incluye:['Medición de nivel sonoro (ruido)','Medición de iluminación','Carga térmica y ergonomía','Puesta a Tierra y continuidad (PAT)','Protocolos oficiales firmados','Recomendaciones de mejora'], para:'Locales y empresas que deben acreditar condiciones ambientales ante ART o Municipio.', tags:['Ruido','Iluminación','PAT']},
  {color:'#3B2447', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><rect x="10" y="8" width="28" height="34" rx="2"/><path d="M16 16h6M26 16h6M16 24h6M26 24h6M16 32h6M26 32h6"/></svg>', title:'Servicio Externo HyS', intro:'Tu asesor de Higiene y Seguridad de forma continua.', que:'Actuamos como tu servicio externo de HyS: cumplimiento mensual, legajo técnico y relación con ART/SRT.', incluye:['Asesoría mensual permanente','Armado y mantenimiento del legajo','Gestión con ART/SRT','RGRL y relevamientos','Actualización normativa','Soporte ante inspecciones'], para:'Empresas y comercios que necesitan cumplimiento continuo sin empleado propio.', tags:['Asesoría mensual','Legajo ART/SRT']},
  {color:'#00558C', ic:'<svg width="30" height="30" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="M24 10 44 18 24 26 4 18Z"/><path d="M12 22v9c0 3 5 6 12 6s12-3 12-6v-9"/><path d="M44 18v9"/></svg>', title:'Capacitaciones', intro:'Formación práctica para actuar ante emergencias.', que:'Dictamos capacitaciones obligatorias y prácticas, con constancias para tu legajo y cumplimiento ante ART.', incluye:['Uso de extintores (práctico)','Procedimientos de evacuación','Primeros auxilios básicos','Prevención de riesgos del puesto','Respuesta ante emergencias','Constancias para el legajo'], para:'Todo local o empresa con personal que deba cumplir capacitaciones obligatorias.', tags:['Extintores','Evacuación','Emergencias']},
];

function openModal(i){
  const s = SERVICIOS[i];
  const modalHead = document.getElementById('modalHead');
  if(!modalHead) return;
  modalHead.style.background = 'linear-gradient(135deg,' + s.color + ' 0%, #2c2551 120%)';
  document.getElementById('modalIc').innerHTML = s.ic;
  document.getElementById('modalTitle').textContent = s.title;
  document.getElementById('modalIntro').textContent = s.intro;
  let h = '<h4>📌 ¿Qué es?</h4><p style="color:#41394d;font-size:15px;">' + s.que + '</p>';
  h += '<h4>✅ Qué incluye</h4><ul>' + s.incluye.map(x => '<li>' + x + '</li>').join('') + '</ul>';
  h += '<h4>👥 ¿Para quién es?</h4><p style="color:#41394d;font-size:15px;">' + s.para + '</p>';
  h += '<div class="modal-tags">' + s.tags.map(t => '<span>' + t + '</span>').join('') + '</div>';
  const wa = 'https://wa.me/5493624313645?text=' + encodeURIComponent('Hola LOOKBEN! Quiero consultar por el servicio de ' + s.title + '.');
  h += '<div class="modal-cta"><a href="' + wa + '" class="btn btn-wa" target="_blank"><svg width="22" height="22" viewBox="0 0 32 32" fill="#fff"><path d="M16 3C9 3 3.5 8.5 3.5 15.5c0 2.4.7 4.6 1.9 6.5L4 29l7.2-1.9c1.8 1 3.9 1.5 6 1.5 7 0 12.5-5.5 12.5-12.5S23 3 16 3Zm5.9 14.3c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2s-.8 1-.9 1.2c-.2.2-.3.2-.6.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.3-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.3 4.7 3.1 1.3 3.1.9 3.7.8.6-.1 1.9-.8 2.1-1.5.3-.7.3-1.4.2-1.5Z"/></svg> Consultar por este servicio</a></div>';
  document.getElementById('modalBody').innerHTML = h;
  document.getElementById('modalOv').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal(){
  const ov = document.getElementById('modalOv');
  if(ov) ov.classList.remove('open');
  document.body.style.overflow = '';
}
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

/* ===== Checklist Autoevaluación ===== */
function tog(el){
  el.classList.toggle('checked');
  updateChk();
}

function updateChk(){
  const items = document.querySelectorAll('.chk-item');
  if(!items.length) return;
  const total = items.length;
  const done = document.querySelectorAll('.chk-item.checked').length;
  const pct = Math.round(done / total * 100);
  
  const pctEl = document.getElementById('chkPct');
  const fillEl = document.getElementById('chkFill');
  if(pctEl) pctEl.textContent = pct;
  if(fillEl) fillEl.style.width = pct + '%';
  
  const msg = document.getElementById('chkMsg'), cta = document.getElementById('chkCta');
  let m;
  if(pct === 0){
    m = 'Marcá los ítems que tu local ya cumple para ver tu estimación.';
  } else if(pct < 50){
    m = 'Tu local necesita varias adecuaciones para estar en condiciones. No te preocupes: te decimos exactamente qué resolver y en qué orden.';
  } else if(pct < 100){
    m = 'Vas por buen camino, pero todavía faltan puntos. Recordá que COPAIPA visa solo con el 100% cumplido. Te ayudamos a cerrar la brecha.';
  } else {
    m = '¡Muy bien! Tu local marca todos los puntos clave. Aun así, el relevamiento profesional confirma detalles (cálculos de carga de fuego, ocupación, etc.). Consultanos para avanzar con el estudio.';
  }
  if(msg) msg.textContent = m;
  if(cta) cta.href = 'https://wa.me/5493624313645?text=' + encodeURIComponent('Hola LOOKBEN! Hice la autoevaluación de mi local y me dio ' + pct + '% de cumplimiento. Quiero consultar mi caso.');
}

/* ===== Formulario Original HyS ===== */
function enviarWA(e){
  e.preventDefault();
  const n = document.getElementById('f_nombre').value;
  const r = document.getElementById('f_rubro').value;
  const s = document.getElementById('f_sup').value;
  const m = document.getElementById('f_msg').value;
  let t = 'Hola LOOKBEN! Soy ' + n + '. Tengo un local tipo ' + r;
  if(s) t += ' de aprox. ' + s;
  t += '. ' + (m || 'Quiero consultar por el Estudio de Seguridad.');
  window.open('https://wa.me/5493624313645?text=' + encodeURIComponent(t), '_blank');
  return false;
}

/* ===== Formulario Hub Operaciones ===== */
function enviarConsultaOperaciones(e){
  e.preventDefault();
  const empresa = document.getElementById('f_empresa').value;
  const contacto = document.getElementById('f_contacto').value;
  const sedes = document.getElementById('f_sedes').value;
  const interes = document.getElementById('f_interes').value;
  const mensaje = document.getElementById('f_mensaje').value;

  let texto = `Hola LOOKBEN! Soy ${contacto}, de la empresa *${empresa}*.\n\n` +
              `📍 Sedes: ${sedes}\n` +
              `🎯 Foco: ${interes}\n` +
              (mensaje ? `💬 Consulta: ${mensaje}\n\n` : `\n`) +
              `Quisiera coordinar una reunión para evaluar nuestra operación.`;
  window.open('https://wa.me/5493624313645?text=' + encodeURIComponent(texto), '_blank');
  return false;
}

/* ===== Menú Móvil ===== */
function toggleMenu(){
  const nl = document.getElementById('navlinks');
  if(nl) nl.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function(){
  const nl = document.getElementById('navlinks');
  if(nl){
    nl.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nl.classList.remove('open')));
  }
  updateChk();
});
