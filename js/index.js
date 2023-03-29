
const loadCushionImg = (id, img) => {
  const target = document.getElementById(id);
  target.src = `./images/cushion-gallery/${img}`;
}

const toggleMenu = () => {
  const menu = document.getElementById('main-menu');
  const menuHeight = menu.style.height;
  menu.style.height = !menuHeight || menuHeight === '0px' 
    ? '210px' 
    : '0px';
}