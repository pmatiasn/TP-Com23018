// Obtener el elemento con el ID "idnav"
const idnav = document.getElementById("idnav");


if (window.location.href.indexOf("index.html") > -1) {                      // Verificar si la página actual es el "index.html"
    idnav.innerHTML = `  
      <ul class="menu-horizontal">
        <li><a href="##">Nuestras Regiones</a>
          <ul class="menu-vertical">
            <li>
              <a href="zona_la_pampa.html">La Pampa</a>
            </li>
            <li>
              <a href="zona_la_patagonia.html">La Patagonia</a>
            </li>
            <li>
              <a href="zona_litoral.html">El Litoral</a>
            </li>
            <li>
              <a href="zona_cuyo.html">Cuyo</a>
            </li>
            <li>
              <a href="zona_norte.html">El Norte</a>
            </li>
          </ul>
        </li>
        <li><a href="altabaja.html">Altas/ Baja de Pasajes</a></li>
      </ul>
    `;
} 
else {
    idnav.innerHTML = `
      <ul class="menu-horizontal">
        <li><a href="index.html">Inicio</a></li>
        <li><a href="##">Nuestras Regiones</a>
          <ul class="menu-vertical">
            <li>
              <a href="zona_la_pampa.html">La Pampa</a>
            </li>
            <li>
              <a href="zona_la_patagonia.html">La Patagonia</a>
            </li>
            <li>
              <a href="zona_litoral.html">El Litoral</a>
            </li>
            <li>
              <a href="zona_cuyo.html">Cuyo</a>
            </li>
            <li>
              <a href="zona_norte.html">El Norte</a>
            </li>
          </ul>
        </li>
        <li><a href="altabaja.html">Alta/ Baja de pasajes</a></li>
      </ul>
    `;
}

document.getElementById("idfooter").innerHTML = `
<div class="redes">
    <a href="https://www.instagram.com/" target="_blank">
        <i class="fa-brands fa-square-instagram fa-2xl"></i>
    </a>
    <a href="https://www.facebook.com/" target="_blank">
        <i class="fa-brands fa-square-facebook fa-2xl"></i>
    </a>
    <a href="https://twitter.com/" target="_blank">
        <i class="fa-brands fa-square-twitter fa-2xl"></i>
    </a>
</div>
`