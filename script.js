// dropdownmenu

document.addEventListener("mouseover", (e) => {
  const subMenuList = [...document.querySelectorAll(".sub-menu-list")];
  if (
    e.target.matches(".sub-menu-title") ||
    e.target.matches(".sub-menu-list") ||
    e.target.matches(".sub-menu-item")
  ) {
    const subGroup = e.target.closest(".menu-item").children[1];
    displayBlock(subGroup);
  } else {
    removeBlock(subMenuList);
  }
});

function displayBlock(element) {
  element.style.display = "block";
}

function removeBlock(element) {
  element.forEach((elem) => {
    elem.style.display = "none";
  });
}

// carousel

function timeout() {
  let pictureImages = [...document.querySelectorAll(".image")];
  let activeImage = pictureImages.find((active) => {
    return active.matches(".active");
  });
  pictureImages.forEach((picture) => {
    if (picture.matches(".active") === activeImage.matches(".active")) {
      setTimeout(() => {
        picture.classList.remove("active");
        picture.nextElementSibling.classList.add("active");
      }, 5000);
    }
  });
}

timeout();

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
