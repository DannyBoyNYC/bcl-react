document.addEventListener("click", handleClicks);
document.addEventListener("mouseover", handleMouseOvers);
document.addEventListener("mouseout", handleMouseOuts);

function handleClicks() {
  console.log(event.target);
  if (event.target.closest(".table-container")) {
    console.log("test", event.target);
  }
}

function handleMouseOvers() {
  // console.log(event.target);
  if (event.target.closest(".table-container")) {
    event.target
      .closest(".table-container")
      .querySelector(".expand-image")
      .classList.add("hovered");
  }
}

function handleMouseOuts() {
  if (event.target.closest(".table-container")) {
    event.target
      .closest(".table-container")
      .querySelector(".expand-image")
      .classList.remove("hovered");
  }
}

// css grid sniffer
const el = document.querySelector("html");
var testElem = document.createElement("div");
if (testElem.style.grid !== undefined) {
  el.classList.add("cssgrid");
} else {
  el.classList.add("no-cssgrid");
}
