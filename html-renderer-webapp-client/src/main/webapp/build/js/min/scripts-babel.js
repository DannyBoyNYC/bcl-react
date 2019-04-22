'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

//mql = media query list
var breakOne = '360'; // 360px  22.5em
var breakTwo = '760'; // 760px  46.25em
// const breakThree = '980'; // 980px  61.25em
// const breakFour = '1140'; // 1140px  71.25em
// const breakFive = '1300'; // 1300px  81.25

// const mqlBreakOne = window.matchMedia(`(min-width: ${breakOne}px)`);
var mqlBreakTwo = window.matchMedia('(min-width: ' + breakTwo + 'px)');
// const mqlBreakThree = window.matchMedia(`(min-width: ${breakThree}px)`);
// const mqlBreakFour = window.matchMedia(`(min-width: ${breakFour}px)`);
// const mqlBreakFive = window.matchMedia(`(min-width: ${breakFive}px)`);

// Event delegation for tables on small screens
document.addEventListener('click', clickEventHandler, false);

function clickEventHandler(e) {
  // HTML TABLES pop under
  // small screens only
  if (window.matchMedia('(max-width: ' + breakTwo + 'px)').matches) {
    if (e.target.classList.contains('figure-header')) {
      var tableToPop = e.target.nextElementSibling; // will always be a table
      var tablePopIcon = e.target.querySelector('.table-xl--btn'); // the svg
      tableToPop.classList.toggle('table-pop');
      // TODO captions
      if (tableToPop.classList.contains('table-pop')) {
        tablePopIcon.classList.add('hilite');
        tablePopIcon.innerHTML = '<svg class="icn">\n\t\t\t\t<title>Open table</title>\n\t\t\t\t<use xlink:href="#arrows-close" />\n\t\t\t\t</svg>';
      } else {
        tablePopIcon.classList.remove('hilite');
        tablePopIcon.innerHTML = '<svg class="icn">\n\t\t\t\t<title>Open table</title>\n\t\t\t\t<use xlink:href="#arrows-open" />\n\t\t\t\t</svg>';
      }
    }
  } else {
    return;
  }
}

// content switcher for show
var switchlink = document.querySelector('.switch');
var switchh1 = document.querySelector('.switch-h1');
var switchh2 = document.querySelector('.switch-h2');
var switchlede = document.querySelector('.switch-lede');
var switchToc = document.querySelectorAll('.switch-cont');

var htmlRoot = document.querySelector('html');

switchToc.forEach(function (switchto) {
  return switchto.style.display = 'none';
});

if (switchh2) {
  switchh2.style.display = 'none';
  switchh1.style.display = 'none';
  switchlede.style.display = 'none';
  switchlink.addEventListener('click', switcheroo);
}

function switcheroo() {
  htmlRoot.classList.add('in-chapter'); // add root class
  switchlink.parentNode.classList.toggle('active');

  switchh1.innerHTML = 'Focus';
  switchToc.forEach(function (switchto) {
    return switchto.style.display = 'block';
  });
  switchh2.style.display = 'block';
  switchh1.style.display = 'block';
  switchlede.style.display = 'block';
  switchlede.classList.toggle('lede');
  switchh1.classList.toggle('alt');
  switchh2.classList.toggle('alt');
}

// end switcher for show

// 1/30/18 disclosure pop over
var disclosureLink = document.querySelector('p.disclosures a');
disclosureLink.addEventListener('click', popUpAction);

var popOverFragDisclosure = '\n<a class="close-popover" href="#0">\u2716\uFE0E</a>\n<div class="popover__content" style="font-size: 0.875rem">\n<p>This document is intended for institutional investors and is not subject to all of the independence and disclosure standards applicable to debt research reports prepared for retail investors under U.S. FINRA Rule 2242. Barclays trades the securities covered in this report for its own account and on a discretionary basis on behalf of certain clients. Such trading interests may be contrary to the recommendations offered in this report.</p>\n<p>For analyst certification(s) and important disclosures, please <a href="#0-link-to-disclosures">click here</a>.</p>\n<p>Completed 12 Nov 2017, 12:00 GMT<br/>Released 14 Nov 2017, 0600 GMT</p><p>Barclays Classification: Restricted - External</p>\n</div>\n';

// end

var toc = document.querySelector('.toc');
var toctoc = document.querySelector('.toc__toc');
var menuShow = document.querySelector('.menu-bug');
var contentHeader = document.querySelector('.content__header');
var labelHeader = document.querySelector('.trigger');
// const iconList = document.querySelector('.icon-list');
// var iconListIcons = [].slice.call(iconList.querySelectorAll('a'));

// open close toc
menuShow.addEventListener('click', activateToc);
// labelHeader.addEventListener('click', activateToc);

function activateToc() {
  var tocCoords = toc.getBoundingClientRect();
  var topOfToc = tocCoords.height;
  toctoc.style.top = topOfToc + 'px';
  toctoc.classList.toggle('toc__open');
}

//window.scroll functions
//show menubar at top of page, make the icon list static

window.addEventListener('scroll', debounce(fixTop, 16));
var tocCoords = toc.getBoundingClientRect();
var coords = { bottom: tocCoords.bottom + window.scrollY };

var header = document.querySelector('.content__header');
var headerHeight = header.getBoundingClientRect().height + 500;
var pageWrap = document.querySelector('article');
var lastScrollTop = 0;

function fixTop() {
  var currScrollTop = pageWrap.scrollTop;
  var isScrollingDown = currScrollTop > lastScrollTop;
  // console.log(isScrollingDown)
  var isHeaderVisible = currScrollTop < headerHeight;
  // console.log(isHeaderVisible)
  if (window.scrollY > coords.bottom) {
    // console.log(window.scrollY)
    toc.classList.add('fix-top');
    setTimeout(function () {
      toc.classList.add('fix-top-open');
    }, 0);
  } else if (window.scrollY < coords.bottom) {
    toc.classList.remove('fix-top');
    toc.classList.remove('fix-top-open');
  }
}

function debounce(func, wait) {
  var timeout = void 0;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(context, args);
    }, wait);
  };
}

// footnotes
var fnlink = document.querySelector('.footnote-link');
var fntext = document.querySelector('.footnote-item');

function show() {
  this.classList.toggle('fn-expanded');
  fntext.classList.toggle('fn-displayed');
  setTimeout(animate, 100);
}
function animate() {
  fntext.classList.toggle('fn-expanded');
}
// support MAIN-2 page
if (fnlink) {
  fnlink.addEventListener('click', show);
}

// NEW - added zoom
// -- // -- // -- byline popovers
var popLinks = document.querySelectorAll('.byline a');
var popLinksArray = [].concat(_toConsumableArray(popLinks));
popLinksArray.forEach(function (popLink) {
  return popLink.addEventListener('click', popUpAction);
});

var popOver = document.createElement('div');
popOver.classList.add('popover');
document.body.appendChild(popOver);

function popUpAction(e) {
  var templateSelector = this.getAttribute('href');

  // new zoom
  if (templateSelector === '#icn-4') {
    document.querySelector('html').classList.toggle('zoomed');
    return;
  }
  // end new zoom

  var linkCoords = this.getBoundingClientRect();
  var coords = {
    bottom: linkCoords.bottom + window.scrollY,
    left: linkCoords.left + window.scrollX
  };
  popOver.style.position = 'absolute';
  popOver.style.top = coords.bottom + 4 + 'px';

  //mql = media query list
  var mql = window.matchMedia('(min-width: 760px)');

  if (mql.matches) {
    popOver.style.left = coords.left + 'px';
  } else {
    popOver.style.left = '1rem';
  }

  if (templateSelector === '#main-certifications-disclosures') {
    popOver.innerHTML = popOverFragDisclosure;
  } else if (templateSelector === '#multiples') {
    popOver.innerHTML = popOverFragMultiples;
  } else if (templateSelector === '#single') {
    popOver.innerHTML = popOverFrag;
  } else if (templateSelector === '#icn-1') {
    popOver.innerHTML = popOverFragIcn01;
  } else if (templateSelector === '#icn-2') {
    popOver.innerHTML = popOverFragIcn02;
  } else if (templateSelector === '#icn-3') {
    popOver.innerHTML = popOverFragIcn03;
  }

  popOver.classList.toggle('show');

  var tempVar = document.querySelector('.popover__content a');
  tempVar.addEventListener('click', function () {
    scrollIt(document.querySelector('#main-certifications-disclosures'), 300, 'easeOutQuad'
    // () => console.log(`Just finished scrolling to ${window.pageYOffset}px`)
    );
  });

  var closePopover = popOver.querySelector('.close-popover');
  closePopover.addEventListener('click', function () {
    popOver.classList.remove('show');
  });
  e.preventDefault();
}

var popOverFrag = '\n<a class="close-popover" href="#00">\u2716\uFE0E</a>\n\n<!-- number one -->\n\n<div class="popover__content multiple">\n<div class="popover__authors">\nBradley Rogoff, CFA\n<span class="popover-credentials">BCI, US</span> \n<span class="popover-credentials">High Grade Credit</span>\n</div>\n\t<ul>\n\n\t\t<li class="phone-container">\n\t\t<svg class="icn">\n\t\t<title>Phone number</title>\n\t\t<use xlink:href="#icon-phone" />\n\t\t</svg>\n\t\t<a class="analyst-phone-link" href="tel:+1 212 412 7903">+1 (212) 526-4000</a></li>\n\n\t\t<li class="analyst-page analyst-page-container">\n\t\t<svg class="icn">\n\t\t<title>Phone number</title>\n\t\t<use xlink:href="#icon-person" />\n\t\t</svg>\n\t\t<a class="analyst-page-link" href="#0">Analyst\'s Page</a></li>\n\n\t\t<li class="email-container">\n\t\t<svg class="icn">\n\t\t<title>Phone number</title>\n\t\t<use xlink:href="#icon-email" />\n\t\t</svg>\n\t\t<a class="analyst-email-link" href="#0">bradley.rogoff@barclays.com</a></li>\n\n\t</ul>\n</div>\n\n<!-- number two -->\n\n<div class="popover__content multiple">\n<div class="popover__authors">\nBradley Rogoff, CFA\n<span class="popover-credentials">BCI, US</span> \n<span class="popover-credentials">High Grade Credit</span>\n</div>\n\n<ul>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-phone" />\n</svg>\n<a href="#0">+1 (212) 526-4000</a></li>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-person" />\n</svg>\n<a href="#0">Analyst\'s Page</a></li>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-email" />\n</svg>\n<a href="#0">bradley.rogoff@barclays.com</a></li>\n</ul>\n</div>\n\n<!-- number three -->\n\n<div class="popover__content multiple">\n<div class="popover__authors">\nBradley Rogoff, CFA\n<span class="popover-credentials">BCI, US</span> \n<span class="popover-credentials">High Grade Credit</span>\n</div>\n\n<ul>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-phone" />\n</svg>\n<a href="#0">+1 (212) 526-4000</a></li>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-person" />\n</svg>\n<a href="#0">Analyst\'s Page</a></li>\n<li>\n<svg class="icn">\n<title>Phone number</title>\n<use xlink:href="#icon-email" />\n</svg>\n<a href="#0">bradley.rogoff@barclays.com</a></li>\n</ul>\n\n</div>\n';

var popOverFragIcn01 = '\n<a class="close-popover" href="#0">\u2716\uFE0E</a>\n<div class="popover__content">\n\n<div>Subscribe</div>\n<ul>\n<li><a href="#0">Add to Read Later</a> <input type="checkbox"> </li>\n<li><a href="#0">Clippings &amp; Annotations</a>\n<ul>\n<li><a href="#0">Annotation 1</a></li>\n<li><a href="#0">Annotation 2</a></li>\n</ul>\n</li>\n\n</ul>\n\n<div>Document Tools</div>\n<ul>\n<li><span class="md" aria-hidden="true" data-icon="\uF440"></span> <a href="#0">Add to Quicklist</a></li>\n<li><span class="md" aria-hidden="true" data-icon="\uF380"></span> <a href="#0">Add to Briefcase</a></li>\n<li><span class="md" aria-hidden="true" data-icon="\uF116"></span> <a href="#0">Email Me</a></li>\n<li><span class="md" aria-hidden="true" data-icon="\uF436"></span> <a href="#0">Share</a></li>\n<li><span class="md" aria-hidden="true" data-icon="\uF407"></span> <a href="#0">Subscribe Client</a></li>\n<li><span class="md" aria-hidden="true" data-icon="\uF395"></span> <a href="#0">Copy Link</a></li>\n</ul>\n\n</div>\n\n</div>\n';

var popOverFragIcn02 = '\n<a class="close-popover" href="#0">\u2716\uFE0E</a>\n<div class="popover__content">\n\n<div>Print PDF</div>\n<ul style="display: block">\n<li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> This chapter (3 pages)</a></li>\n<li><a><span class="md" aria-hidden="true" data-icon="&#xE001;"></span> US Credit Alpha (43 pages)</a></li>\n</ul>\n</div>\n</div>\n';

var popOverFragIcn03 = '\n<a class="close-popover" href="#0">\u2716\uFE0E</a>\n<div class="popover__content attachments">\n\n<div>Attachments in this article</div>\n<ul style="display: block">\n<li> \n\t<a>\n\t\t<svg class="icn">\n\t\t\t<title>PDF Attachment</title>\n\t\t\t<use xlink:href="#pdf" />\n\t  \t</svg>\n\t\t<span>PDF Attachment</span>\n\t</a>\n</li>\n<li>\n\t<a>\n\t\t<svg class="icn">\n\t\t\t<title>PDF Attachment</title>\n\t\t\t<use xlink:href="#excel" />\n\t\t</svg>\n\t\t<span>Excel Attachment</span>\n\t</a>\n</li>\n</ul>\n</div>\n</div>\n';

//variables
var popElemArr = Array.from(document.querySelectorAll('.popable'));

function showTools() {
  // only if the icon is visible
  if (this.querySelector('.popable > figure')) {
    var elToExpand = this.querySelector('.expand-image');
    console.log(elToExpand);
    elToExpand.classList.toggle('hovered');
  }
}

// build the expanded state
var expandedElem = document.createElement('div');
expandedElem.classList.add('expanded-item');

function showPopover() {
  if (this.querySelector('.popable > figure')) {
    var itemToPop = this.querySelector('.popable > figure a img');
    // grab node content before cloning
    var figureHeader = document.querySelector('.figure-header');
    var headerText = figureHeader.innerText;
    var captionContent = document.querySelector('.caption').innerText;
    var sourceText = document.querySelector('.source').innerText;
    // alter the node before cloning
    document.querySelector('.expand-image').style.display = 'none';
    // figureHeader.innerText = '';
    // clone the node
    var node = itemToPop.cloneNode(true);
    var expandIcon = itemToPop.querySelector('.expand-image');
  }

  var popoverContent = '\n\t<div class="topbar">\n\t<div class="expand-close">\u2716\uFE0E</div>\n\t\t<h3 class="header-text">' + headerText + '</h3>\n\t\t<p class="caption-text">' + captionContent + '</p>\n\t\t<p class="source-text">' + sourceText + '</p>\n\t</div>\n\t';

  expandedElem.innerHTML = popoverContent;
  expandedElem.appendChild(node);
  document.body.appendChild(expandedElem);

  var expandClose = document.querySelector('.expand-close');
  expandClose.addEventListener('click', function () {
    expandedElem.innerHTML = '';
    document.body.removeChild(expandedElem);
    document.querySelector('.expand-image').style.display = '';
  });
}

// event listeners
popElemArr.forEach(function (el) {
  return el.addEventListener('click', showPopover, false);
});
popElemArr.forEach(function (el) {
  return el.addEventListener('mouseover', showTools, false);
});
popElemArr.forEach(function (el) {
  return el.addEventListener('mouseout', showTools, false);
});

//# sourceMappingURL=scripts-babel.js.map