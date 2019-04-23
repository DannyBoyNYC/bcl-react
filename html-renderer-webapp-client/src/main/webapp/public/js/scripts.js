document.addEventListener('click', handleClicks);
document.addEventListener('mouseover', handleMouseOvers);
document.addEventListener('mouseout', handleMouseOuts);
document.addEventListener('scroll', handleScroll);
window.addEventListener('load', init);

setup = {};

function init() {
  const toc = document.querySelector('.toc');
  const tocCoords = toc.getBoundingClientRect();
  setup.bottom = tocCoords.bottom;
  const header = document.querySelector('.content__header');
  setup.headerHeight = header.getBoundingClientRect().height + 500;
  setup.pageWrap = document.querySelector('article');
  setup.lastScrollTop = 0;
  // setUp.
  console.log(setup);
}

function handleScroll() {
  let el = document.querySelector('article');
  let y = el.scrollTop;
  // console.log(y);
  // let isScrollingDown = currScrollTop > lastScrollTop;
  console.log(window.scrollY);
  // let isHeaderVisible = currScrollTop < headerHeight;
  // // console.log(isHeaderVisible);
  if (window.scrollY > setup.bottom) {
    //   // console.log(window.scrollY)
    document.querySelector('.toc').classList.add('fix-top');
    //   setTimeout(function() {
    //     toc.classList.add('fix-top-open');
    //   }, 0);
    // } else if (window.scrollY < coords.bottom) {
    //   toc.classList.remove('fix-top');
    //   toc.classList.remove('fix-top-open');
  }
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

function destroyPopover() {
  document.querySelector('.expanded-item').remove();
  document.querySelector('body').classList.remove('has-overlay');
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
