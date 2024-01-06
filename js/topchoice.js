
const photos = document.querySelectorAll('.container-images__image');
const overlay = document.getElementById('topchoice__overlay');
const modalImage = document.getElementById('topchoice__modalImage');
const closeBtn = document.getElementById('topchoice__closeBtn');
const zoomIn = document.getElementById('topchoice__zoomInBtn');
const zoomOut = document.getElementById('topchoice__zoomOutBtn');
let scale = 1;

photos.forEach(photo => {
    photo.addEventListener('click', function () {
        overlay.style.display = 'flex';
        const photoSrc = photo.style.backgroundImage;
        const modifiedPhotoSrc = photoSrc.slice(5, -1).replace(/"/g, "");
        modalImage.src = modifiedPhotoSrc;
    });
});

closeBtn.addEventListener('click', function () {
    overlay.style.display = 'none';
    scale = 1;
    document.getElementById('topchoice__modalImage').style.transform = `scale(${scale})`;
});


zoomIn.addEventListener('click', () => {
    (scale+0.4 > 4) ? scale = 1 : scale += 0.4;
    document.getElementById('topchoice__modalImage').style.transform = `scale(${scale})`;

});

zoomOut.addEventListener('click', () => {
    (scale-0.4 < 0) ? scale = 1 : scale -= 0.4;
    document.getElementById('topchoice__modalImage').style.transform = `scale(${scale})`;

});

overlay.addEventListener('click', function (event) {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
});
