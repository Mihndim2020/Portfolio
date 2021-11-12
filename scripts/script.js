const TOGGLE_BUTTON = document.getElementById('toggle-button');
const CLOSE_BUTTON = document.getElementById('close-button');
const NAV_MENU = document.getElementById('mobile-menu');
const ITEMS = NAV_MENU.children[1].children;


const mobileMenuHandler = () => {
  NAV_MENU.classList.toggle('menu-on');
};

window.onload = mobileMenuHandler;
TOGGLE_BUTTON.onclick = mobileMenuHandler;
CLOSE_BUTTON.onclick = mobileMenuHandler;

for (let i = 0; i < ITEMS.length; i += 1) {
  ITEMS[i].children[0].onclick = mobileMenuHandler;
}