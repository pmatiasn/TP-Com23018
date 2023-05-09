/* Variables */
const btnCierra = document.querySelector ('#btn-cierra'); /*Acceso al boton de cierre*/
const btnAdelanta = document.querySelector ('#btn-adelanta'); /*Acceso al boton adelanta*/
const btnRetrocede = document.querySelector ('#btn-retrocede'); /*Acceso al boton retrocede*/
const imagenes = document.querySelectorAll ('#galeria img'); /*acceso a todas las imagenes del contenedor galeria*/
const contenedorPrincipal = document.querySelector ('#contenedor-principal'); /*acceso al contenedor principal*/
const imagenActiva = document.querySelector ('#img-activa'); /*acceso a la imagen activa*/
let indiceImagen = 0; /*indice imagen/ numero*/

/* Abre el contenedor */
const abreLightbox = (event) => {
    imagenActiva.src = event.target.src;
    contenedorPrincipal.style.display = 'flex';
    indiceImagen = Array.from (imagenes).indexOf (event.target);
};

imagenes.forEach((imagen) => {
    imagen.addEventListener ('click', abreLightbox);
});

/* Cierra el contenedor */
btnCierra.addEventListener ('click', () => {
    contenedorPrincipal.style.display = 'none';
});

/* Adelanta imagen */
const adelantaImagen = () => {
    if (indiceImagen === imagenes.length - 1){
        indiceImagen = -1;
    };
    imagenActiva.src = imagenes [indiceImagen + 1].src;
    indiceImagen ++;
};

btnAdelanta.addEventListener ('click', adelantaImagen);

/* Retrocede imagen */
const retrocedeImagen = () => {
    if (indiceImagen === 0){
        indiceImagen = imagenes.length;
    };
    imagenActiva.src = imagenes [indiceImagen - 1].src;
    indiceImagen --;
};

btnRetrocede.addEventListener ('click', retrocedeImagen);