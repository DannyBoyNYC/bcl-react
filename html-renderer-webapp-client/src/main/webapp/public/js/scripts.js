document.addEventListener('click', handleClicks);
document.addEventListener('mouseover', handleMouseOvers);
document.addEventListener('mouseout', handleMouseOuts);

function handleClicks() {
  if (event.target.closest('.table-container')) {
    event.preventDefault();
    buildPopover();
  } else if (event.target.matches('.expand-close')) {
    event.preventDefault();
    destroyPopover();
  }
}

function destroyPopover() {
  document.querySelector('.expanded-item').remove();
  document.querySelector('body').classList.remove('has-overlay');
}

function buildPopover() {
  var container = event.target.closest('.table-container');
  var imgSrc = container.querySelector('a img').getAttribute('src');
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
    <div><img class="img-responsive img-rounded" src="${imgSrc}" style="width:85%px;"></div>
  `;
  div.innerHTML = elem;
  document.querySelector('body').appendChild(div);
  document.querySelector('body').classList.add('has-overlay');
}

function handleMouseOvers() {
  // console.log(event.target);
  if (event.target.closest('.table-container')) {
    event.target
      .closest('.table-container')
      .querySelector('.expand-image')
      .classList.add('hovered');
  } else return;
}

function handleMouseOuts() {
  if (event.target.closest('.table-container')) {
    event.target
      .closest('.table-container')
      .querySelector('.expand-image')
      .classList.remove('hovered');
  }
}

// css grid sniffer
const el = document.querySelector('html');
var testElem = document.createElement('div');
if (testElem.style.grid !== undefined) {
  el.classList.add('cssgrid');
} else {
  el.classList.add('no-cssgrid');
}
