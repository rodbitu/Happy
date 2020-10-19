const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

//Create map
const map = L.map('mapid', options).setView([-1.4358107,-48.4774318], 15);

//Create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png')
.addTo(map);

//Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})


//Create and add marker
L.marker([-1.4358107,-48.4774318], { icon })
  .addTo(map)
  
/* image gallery */

function selectImage(event) {
   const button = event.currentTarget

   // remover todas as classes .active
   const buttons = document.querySelectorAll(".images button")
   buttons.forEach((button) => {
    button.classList.remove("active")
   })

   //selecionar a image clicada
   const image = button.children[0]
   const imageContainer = document.querySelector(".orphanage-details > img")

   //atualizar o container de image
   imageContainer.src = image.src

   //adicionar a classe .active para este botao
   button.classList.add('active')
}
