
const loadCushionImg = (id, img) => {
  const target = document.getElementById(id);
  target.src = `./images/cushion-gallery/${img}`;
}

const toggleMenu = () => {
  const menuHeight = document.getElementById('main-menu').offsetHeight;
  const container = document.getElementById('main-menu-wrapper');
  const containerHeight = container.style.height;
  container.style.height = !containerHeight || containerHeight === '0px' 
    ? `${menuHeight}px`
    : '0px';
}