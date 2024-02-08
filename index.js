function imageClicked() {
  console.log('Image was clicked!');
  // Add your custom logic here
  this.src = "./src/assets/photos/caixa_anorina.jpg"
}

const arrayOfImages = document.getElementsByClassName('clickableImage');

for (const image of arrayOfImages) {
  image.addEventListener('click', imageClicked);
}
