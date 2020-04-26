

//Caroussel
function Caroussel(element, ms, ...images) {
  let count = 0;
  setInterval(() => {
    element.style.backgroundImage = `url('/images/${images[count]}.jpg')`;
    count === images.length - 1 ? (count = 0) : count++;
  }, ms);
}
const bg = document.getElementById("showcase");
const images = ["note-book", "freelance", "deejay", "microphone"];
const caroussel = new Caroussel(bg, 5000, ...images);




