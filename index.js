
const sideMenu = document.querySelector('aside');
const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const themeToggler = document.querySelector('.theme-toggler');


// ---- Open and close sidebar ----
menuBtn.addEventListener('click', evt => {
    sideMenu.style.display = 'block';
})

closeBtn.addEventListener('click', evt => {
    sideMenu.style.display = 'none';
})

// ---- Dark and light mode --------
themeToggler.addEventListener('click', evt => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

