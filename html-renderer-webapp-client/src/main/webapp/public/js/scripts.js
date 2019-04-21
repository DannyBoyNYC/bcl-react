document.addEventListener("click", handleClicks);
document.addEventListener("mouseover", handleMouseOvers);
document.addEventListener("mouseout", handleMouseOuts);

function handleClicks() {
  console.log(event.target);
  if (event.target.closest(".popable")) {
    console.log("test", event.target);
  }
}

function handleMouseOvers() {
  if (event.target.closest(".popable")) {
    document.querySelector(".expand-image").classList.add("hovered");
  }
}

function handleMouseOuts() {
  if (event.target.closest(".popable")) {
    document.querySelector(".expand-image").classList.remove("hovered");
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
