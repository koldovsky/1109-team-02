
    const photos = document.querySelectorAll('.container-images__image');
    const overlay = document.getElementById('topchoice__overlay');
    const modalImage = document.getElementById('topchoice__modalImage');
    const closeBtn = document.getElementById('topchoice__closeBtn');
    

    photos.forEach(photo => {
        photo.addEventListener('click', function () {
            overlay.style.display = 'flex';
            const photoSrc = photo.style.backgroundImage;
            const modifiedPhotoSrc = photoSrc.slice(6, -1).replace(/"/g, "");
            modalImage.src = modifiedPhotoSrc;
        });
    });

    closeBtn.addEventListener('click', function () {
        overlay.style.display = 'none';
    });

    overlay.addEventListener('click', function (event) {
        if (event.target === overlay) {
            overlay.style.display = 'none';
        }
    });
