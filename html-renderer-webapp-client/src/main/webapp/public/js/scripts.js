window.addEventListener('load', handleLoad);
document.addEventListener('click', handleClicks);
document.addEventListener('mouseover', handleMouseOvers);
document.addEventListener('mouseout', handleMouseOuts);
document.addEventListener('scroll', handleScroll);

var setup = {};

function handleLoad() {
  const toc = document.querySelector('.toc');
  setup.toc = toc;
  const tocCoords = toc.getBoundingClientRect();
  setup.bottom = tocCoords.bottom;
  audioAutoplay();
}

function handleClicks(event) {
  if (event.target.closest('figure')) {
    event.preventDefault();
    buildPopover(event);
  } else if (event.target.matches('.expand-close')) {
    event.preventDefault();
    destroyPopover(event);
  }
}

function handleMouseOvers(event) {
  if (event.target.closest('figure')) {
    event.target
      .closest('figure')
      .querySelector('.expand-image')
      .classList.add('hovered');
  }
}

function handleMouseOuts(event) {
  if (event.target.closest('figure')) {
    event.target
      .closest('figure')
      .querySelector('.expand-image')
      .classList.remove('hovered');
  }
}

function handleScroll() {
  if (window.scrollY > setup.bottom) {
    setup.toc.classList.add('fix-top');
    setTimeout(function() {
      setup.toc.classList.add('fix-top-open');
    }, 0);
  } else if (window.scrollY < setup.bottom) {
    setup.toc.classList.remove('fix-top');
    setup.toc.classList.remove('fix-top-open');
  }
}

function buildPopover(event) {
  var container = event.target.closest('figure');
  var imgSrc = container.querySelector('img').getAttribute('src');
  var figureHeader = container.querySelector('.figure-header').innerText;
  var caption = container.querySelector('.caption').innerText;

  var div = document.createElement('div');
  div.classList.add('expanded-item');
  var elem = `
    <div class="topbar">
      <div class="expand-close">✖</div>
      <h3 class="header-text">${figureHeader}</h3>
      <p class="source-text">${caption}</p>
    </div>
    <div>
      <img class="img-responsive img-rounded" src="${imgSrc}" style="width:85%px;">
    </div>
  `;
  div.innerHTML = elem;
  document.querySelector('body').appendChild(div);
  document.querySelector('body').classList.add('has-overlay');
}

function destroyPopover() {
  document.querySelector('.expanded-item').remove();
  document.querySelector('body').classList.remove('has-overlay');
}

// css grid sniffer
const el = document.querySelector('html');
var testElem = document.createElement('div');
if (testElem.style.grid !== undefined) {
  el.classList.add('cssgrid');
} else {
  el.classList.add('no-cssgrid');
}
if (testElem.style.fontKerning) {
  el.classList.add('should-kern');
} else {
  el.classList.add('no-kern');
}

var audioAutoplay = function() {
  // var c = window.location.search.substr(1);
  // console.log(c);

  var promise = document.querySelector('audio').play();
  if (promise !== undefined) {
    promise
      .then(_ => {
        // Autoplay started!
        console.log('scripts.js: Autoplay started!');
      })
      .catch(error => {
        console.log('scripts.js: Autoplay was prevented.');
        // Autoplay was prevented.
        // Show a "Play" button so that user can start playback.
      });
  }
};
