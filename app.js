AOS.init();

function load() {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {preloader.classList.add("loaded")}, 1400);
}

document.addEventListener("DOMContentLoaded", load);