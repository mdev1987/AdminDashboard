// ---- Sidebar ----
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');

menuBtn.addEventListener('click', evt => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', evt => {
    sideMenu.style.display = 'none';
})
