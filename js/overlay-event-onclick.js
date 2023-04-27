/*
  Function to handle an onclick event
  * Updates the overlay content
  * Displays the overlay using clip-path
*/
function loadViewer(id) {

  const viewer = document.getElementById('viewer');

  // disable the scroll on art gallery content
  const body = document.querySelector('body');
  body.className = 'noscroll';

  // redefine the clip path
  viewer.style.clipPath = topLeftEnd;

  // load the content into gallery viewer
  artGalleryEntries.forEach((entry) => {
    console.log(entry);
    const elm = document.getElementById(`viewer-${entry}`);
    console.log(elm);
    if (entry === 'img') {
      elm.src = `./images/art-gallery/${artGallery[id].images.main}`;
    } else {
      elm.innerHTML = artGallery[id][entry];
    }
  });
  viewer.scrollTo(0, 0);
}

function loadFabricViewer(id) {

  const viewer = document.getElementById('viewer');

  // disable the scroll on fabric gallery content
  const body = document.querySelector('body');
  body.className = 'noscroll';

  // redefine the clip path
  viewer.style.clipPath = topLeftEnd;

  // load the content into gallery viewer
  fabricGalleryEntries.forEach((entry) => {
    console.log(entry);
    const elm = document.getElementById(`viewer-${entry}`);
    console.log(':: ', elm);
    if (entry === 'img') {
      elm.src = `./images/fabric-gallery/${fabricGallery[id][entry]}`;
    } else {
      elm.innerHTML = fabricGallery[id][entry];
    }
  });
  viewer.scrollTo(0, 0);
}


/*
  'Hides' the overlay
*/
function closeViewer() {
  const viewer = document.getElementById('viewer');
  viewer.style.clipPath = topLeftStart;

  // Reset the art gallery page content
  const body = document.querySelector('body');
  body.className = 'scroll';
  // const page = document.getElementById('content');
  // page.style.display = 'block';
}
