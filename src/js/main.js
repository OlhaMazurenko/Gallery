const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.gallery_item');

imgs.forEach(
    gallery_item => gallery_item.addEventListener('click', event => (current.src = event.target.src))
);
