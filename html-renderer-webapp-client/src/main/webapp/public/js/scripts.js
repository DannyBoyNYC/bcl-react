document.addEventListener("click", handleClicks);
document.addEventListener("mouseover", handleMouseOvers);
document.addEventListener("mouseout", handleMouseOuts);

function handleClicks() {
  if (event.target.closest(".table-container")) {
    event.preventDefault();
    var container = event.target.closest(".table-container");
    var itemToPop = container.querySelector("a img");
    // grab node content before cloning
    var figureHeader = container.querySelector(".figure-header");
    var headerText = figureHeader.innerText;
    var captionContent = container.querySelector(".caption").innerText;

    if (container.querySelector(".source")) {
      var sourceText = container.querySelector(".source").innerText;
    }
    // alter the node before cloning
    // document.querySelector(".expand-image").style.display = "none";
    // clone the node
    var node = itemToPop.cloneNode(true);
    console.log(itemToPop);
    // var expandIcon = itemToPop.querySelector(".expand-image");
    // console.log(expandIcon);
    document.querySelector("body").classList.add("has-overlay");
  }
}

function handleMouseOvers() {
  // console.log(event.target);
  if (event.target.closest(".table-container")) {
    event.target
      .closest(".table-container")
      .querySelector(".expand-image")
      .classList.add("hovered");
  } else return;
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
