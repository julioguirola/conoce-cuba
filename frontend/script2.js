document.addEventListener('DOMContentLoaded', () => {
  let imagenes = [
    "https://i.pinimg.com/736x/fc/fa/d1/fcfad15eed219fabe6f446470c16ad77.jpg",
    "https://i.pinimg.com/736x/d0/81/64/d081641b04159441174cfd7ccfbd1d60.jpg",
    "https://i.pinimg.com/736x/83/b5/8d/83b58de641365c29fbd3933f633d998c.jpg",
    "https://i.pinimg.com/736x/5a/11/b3/5a11b375d35c3a65e6ea00c55344d869.jpg",
    "https://i.pinimg.com/736x/06/95/7a/06957a670128e6fb622ee55bafc90784.jpg",
  ];
  
  let index = 0;
  
  let mainimageImage = document.getElementById("mainimage");
  
  function cambiarimagen() {
    mainimageImage.src = imagenes[index];
  
    index = (index + 1) % imagenes.length;
  }
  
  setInterval(cambiarimagen, 5000);
})

