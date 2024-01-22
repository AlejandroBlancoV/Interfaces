
import { sponsor } from './sponsor.js';


function generarHTML() {
  
  const nuevoHTML = sponsor.map(sponsor => `
 
  <div class="text-center" id="Sponsor">
                                <img class="img-fluid  mb-4 px-4 Sponsor" src="Images/About/${sponsor.imagen}" alt="Sponsor" />
                                
                            </div>
                            
  `).join('');

  return nuevoHTML;
}


document.addEventListener('DOMContentLoaded', function () {
 
  const contenedorSponsor = document.getElementById('Sponsor');

  
  if (!contenedorSponsor) {
    console.error('El contenedor de equipos no se encontró en el HTML.');
  } else {
  
    const nuevoHTML = generarHTML();
    contenedorSponsor.innerHTML = nuevoHTML;
  }
});