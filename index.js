// Fondo animado decorativo
const fondo = document.getElementById("fondo");
const imagenesFondo = [
  "imagenes/portadasAlbumes/cTangana_AvidaDollars.jpg",
  "imagenes/portadasAlbumes/cTangana_ElMadrileno.jpg",
  "imagenes/portadasAlbumes/Mda_7.jpg",
  "imagenes/portadasAlbumes/Mda_RomanticoSalvaje.jpg",
  "imagenes/portadasAlbumes/yungBeef_Adromicfms2.jpg",
  "imagenes/portadasAlbumes/cTangana_1015.jpg",
  "imagenes/portadasAlbumes/stickyMA_LPADSMA.jpg",
  "imagenes/portadasAlbumes/stickyMA_corazonVerde.jpg",
  "imagenes/portadasAlbumes/yungBeef_Adromicfms4.jpg",
  "imagenes/portadasAlbumes/bonCalso_outtaMyHead.jpg",
  "imagenes/portadasAlbumes/mvrk_laFeQueMeTengas.jpg",
  "imagenes/portadasAlbumes/rusowsky_Daisy.jpg",
  "imagenes/portadasAlbumes/stickyMA_5Dimension.jpg"
];

// Cambiar el fondo aleatoriamente cada 4 segundos
function cambiarFondo() {
  const indiceAleatorio = Math.floor(Math.random() * imagenesFondo.length);
  fondo.style.backgroundImage = `url('${imagenesFondo[indiceAleatorio]}')`;
}
cambiarFondo(); // inicial
setInterval(cambiarFondo, 4000);

// POPUP
function cerrarPopup() {
  document.getElementById("popupBienvenida").style.display = "none";
}

// Mostrar popup al cargar la página
window.onload = function() {
  document.getElementById("popupBienvenida").style.display = "flex";
};
