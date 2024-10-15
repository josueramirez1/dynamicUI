document.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".menu-item")) return;
  console.log("hover");
});

document.addEventListener("click", (e) => {
  let pictureImages = [...document.querySelectorAll(".image")];
  clickForNextImage(e, pictureImages);
  clickForPreviousImage(e, pictureImages);
});

function clickForNextImage(e, pictureImages) {
  if (e.target.matches(".fa-arrow-right")) {
    let activeImage = pictureImages.find((active) => {
      return active.matches(".active");
    });
    if (!activeImage.nextElementSibling) return;
    activeImage.classList.remove("active");
    activeImage.nextElementSibling.classList.add("active");
  }
}

function clickForPreviousImage(e, pictureImages) {
  if (e.target.matches(".fa-arrow-left")) {
    let activeImage = pictureImages.find((active) => {
      return active.matches(".active");
    });
    if (!activeImage.previousElementSibling) return;
    activeImage.classList.remove("active");
    activeImage.previousElementSibling.classList.add("active");
  }
}
