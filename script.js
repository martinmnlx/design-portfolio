const zoomImages = document.querySelectorAll('img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

zoomImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxImg.src = img.src;
    });
});

lightbox.addEventListener('click', function (e) {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
    lightbox.style.cursor = 'zoom-out';
  }
});