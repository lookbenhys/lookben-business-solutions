const modalData={
  hys:{
    title:"Seguridad e Higiene",
    sub:"Prevención · Cumplimiento · Protección",
    text:"Servicio profesional orientado a gestionar las necesidades de Seguridad e Higiene de la operación.",
    items:["Estudio de Seguridad","Incendios","Planes de Evacuación","Mediciones de Higiene","Servicio Externo HyS","Capacitaciones"]
  },
  facility:{
    title:"Mantenimiento y Adecuaciones",
    sub:"Infraestructura · Continuidad · Mejora",
    text:"Mantenimiento, infraestructura y adecuaciones con planificación, seguimiento y control de la operación.",
    items:["Mantenimiento Integral","Adecuaciones y Obras","Gestión de Edificios","Gestión de Proveedores","Energía y Potencias","Space Planning y Footprint Operativo","CAPEX"]
  },
  cof:{
    title:"Gestión de COF y Gastos Operativos",
    sub:"Control · Análisis · Eficiencia",
    text:"Auditoría, seguimiento y análisis de gastos operativos para identificar desvíos, oportunidades y palancas de eficiencia.",
    items:["Auditoría y Gestión de COF","Budget & Forecast","Trazabilidad de Gastos Operativos","Administración y Evaluación de Proveedores","Desgloses de Rentabilidad","Análisis de Pareto","Palancas de Eficiencia","Diseño de KPIs y Dashboard Ejecutivo"]
  }
};

const overlay=document.getElementById("modalOverlay");
const content=document.getElementById("modalContent");
document.querySelectorAll(".detail-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const d=modalData[btn.dataset.modal];
    content.innerHTML=`<div class="eyebrow">${d.sub}</div><h2>${d.title}</h2><p>${d.text}</p><h4>Alcance</h4><ul>${d.items.map(x=>`<li>${x}</li>`).join("")}</ul><div class="modal-cta"><a class="btn btn-wa" target="_blank" rel="noopener" href="https://wa.me/5493624313645?text=${encodeURIComponent("Hola LOOKBEN! Quiero consultar por "+d.title+".")}">Consultar por este servicio</a></div>`;
    overlay.classList.add("open"); document.body.style.overflow="hidden";
  });
});
function closeModal(){overlay.classList.remove("open");document.body.style.overflow="";}
document.getElementById("modalClose").addEventListener("click",closeModal);
overlay.addEventListener("click",e=>{if(e.target===overlay)closeModal()});
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

const burger=document.getElementById("burger"), nav=document.getElementById("navLinks");
burger.addEventListener("click",()=>nav.classList.toggle("open"));
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
