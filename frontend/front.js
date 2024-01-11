function landingImgs(){
  let imagenes = [
    "landing1.jpg",
    "landing2.jpg",
    "landing3.jpg",
    "landing4.jpg",
    "landing5.jpg",
  ];
  
  let index = 0;
  
  let mainimageImage = document.getElementById("landingImg");
  
  function cambiarimagen() {
    mainimageImage.src = imagenes[index];
  
    index = (index + 1) % imagenes.length;
  }
  
  setInterval(cambiarimagen, 5000);
}

