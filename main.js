const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.addEventListener("click", () => {
    removeAllClasses();
    card.classList.add("active");
  });
});

function removeAllClasses() {
  cards.forEach((card) => {
    card.classList.remove("active");
  });
}

document.body.addEventListener("click", () => {
  removeAllClasses();
});
