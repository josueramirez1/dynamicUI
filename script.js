document.addEventListener("mouseover", (e) => {
  if (!e.target.matches(".menu-item")) return;
  const group = e.target.children[0];
  group.style.display = "block";
});

document.addEventListener("mouseout", (e) => {
  if (!e.target.matches(".menu-item")) return;
  const group = e.target.children[0];
  group.style.display = "none";
});

document.addEventListener("click", (e) => {
  let pictureImages = [...document.querySelectorAll("img")];
  clickForNextImage(e, pictureImages);
  clickForPreviousImage(e, pictureImages);
});

function clickForNextImage(e, pictureImages) {
  if (e.target.matches(".fa-arrow-right")) {
    let activeImage = pictureImages.find((active) => {
      return active.matches(".active");
    });
    if (!activeImage.nextElementSibling.matches(".image")) return;
    activeImage.classList.remove("active");
    activeImage.nextElementSibling.classList.add("active");
    const imgLink = e.target.closest(".img-link");
    imgLink.href = "#" + activeImage.nextElementSibling.id;
  }
}

function clickForPreviousImage(e, pictureImages) {
  if (e.target.matches(".fa-arrow-left")) {
    let activeImage = pictureImages.find((active) => {
      return active.matches(".active");
    });
    if (!activeImage.previousElementSibling.matches(".image")) return;
    activeImage.classList.remove("active");
    activeImage.previousElementSibling.classList.add("active");
    const imgLink = e.target.closest(".img-link");
    imgLink.href = "#" + activeImage.previousElementSibling.id;
  }
}
