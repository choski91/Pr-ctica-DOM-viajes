const viajes = [
  {
    title: "viaje 1",
    description: "En Málaga vas a poder disfrutar de sus excelentes playas y gastronomía.¡Anímate!",
    url_img: "./assets/images/malaga.jpg",

  },
    {
    title: "viaje 2",
    description: "Venite a Sevilla a disfrutar de sus ferias",
    url_img: "./assets/images/sevilla.jpg" ,

  },
    {
    title: "viaje 3",
    description: "En Granada vas a encontrar todo para relajarte",
    url_img: "./assets/images/granada.jpg",

  }
 ];

 function viajesDespegar () {
  const porElMundo = document.getElementById("viajes");
  viajes.forEach((viaje) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <h3><b></b> ${viaje.title}</h3>
      <p>${viaje.description}</p>
      <img src= "${viaje.url_img}"/>
     `;
    porElMundo.appendChild(article);
  });
}

viajesDespegar();

