const viajes = [
  {
    title: "viaje 1",
    description: "En Málaga vas a poder disfrutar de sus excelentes playas y gastronomía.¡Anímate!",
    url_img: "./assets/images/malaga.jpg",

  },
  {
    title: "viaje 2",
    description: "Venite a Sevilla a disfrutar de sus ferias",
    url_img: "./assets/images/sevilla.jpg",

  },
  {
    title: "viaje 3",
    description: "En Granada vas a encontrar todo para relajarte",
    url_img: "./assets/images/granada.jpg",

  }
];

function viajesDespegar() {
  const porElMundo = document.getElementById("viajes");
  viajes.forEach((viaje) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3><b>${viaje.title}</b></h3>
      <p>${viaje.description}</p>
      <img src= "${viaje.url_img}"/>
     `;
    porElMundo.appendChild(article);
  });
}

viajesDespegar();


document.getElementById("form-destinos").addEventListener("submit", (event) => {
  event.preventDefault();

  const destinoElegido = event.target.elements.destino.value.trim();//esto es lo que selecciona el usuario en el form

  const seccionViajes = document.getElementById("viajes");//selecciona por id mi seleccion viajes y lo guardo
  seccionViajes.innerHTML = ""; // Limpio la sección que habia seleccionado

  const articuloFinal = document.createElement("article");//creo un articulo html
  if (destinoElegido == "malaga") { //si el usuario selecciono malaga
    //relleno el art con los datos de abajo que corresp con malaga
    articuloFinal.innerHTML = `  
      <h3><b>${viajes[0].title}</b></h3>
      <p>${viajes[0].description}</p>
      <img src= "${viajes[0].url_img}"/>
     `;

    seccionViajes.appendChild(articuloFinal);
  }//le añado como hijo mi artfinal
  else if (destinoElegido == "sevilla") {

    articuloFinal.innerHTML = `
      <h3><b>${viajes[1].title}</b></h3>
      <p>${viajes[1].description}</p>
      <img src= "${viajes[1].url_img}"/>
     `;
    seccionViajes.appendChild(articuloFinal);
  }
  else {
    articuloFinal.innerHTML = `
      <h3><b>${viajes[2].title}</b></h3>
      <p>${viajes[2].description}</p>
      <img src= "${viajes[2].url_img}"/>
     `;
    seccionViajes.appendChild(articuloFinal);
  };
});

