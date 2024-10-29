let imagesSources = [];

function showLightbox(src) {
    let lightboxImg = $("#lightboxImg");
    if (lightboxImg[0] === undefined) return;

    let lightbox = $("#lightbox");
    if (lightbox[0] === undefined) return;

    lightbox.addClass("active");
    lightboxImg[0].src = src;
}

function hideLightbox() {
    let lightbox = $("#lightbox");
    if (lightbox[0] === undefined) return;

    lightbox.removeClass("active");
}

function nextLightbox() {
    let lightboxImg = $("#lightboxImg");
    if (lightboxImg[0] === undefined) return;

    let currentIndex = imagesSources.findIndex((val) => {
        return val == lightboxImg[0].src;
    });
    currentIndex += 1;
    currentIndex %= imagesSources.length;

    lightboxImg[0].src = imagesSources[currentIndex];
}

function prevLightbox() {
    let lightboxImg = $("#lightboxImg");
    if (lightboxImg[0] === undefined) return;

    let currentIndex = imagesSources.findIndex((val) => {
        return val == lightboxImg[0].src;
    });
    currentIndex -= 1;
    currentIndex %= imagesSources.length;

    lightboxImg[0].src = imagesSources[currentIndex];
}

function registerImage(img) {
    imagesSources.push(img.src);

    img.addEventListener('click', () => {
        let lightbox = $("#lightboxImg")[0];
        if (lightbox === undefined) return;

        lightbox.src = img.src;
        showLightbox(img.src);
    });
}

function registerEvents() {
    let closeLightbox = $("#closeLightbox");
    if (closeLightbox[0] === undefined) return;

    let prevBtn = $("#prev");
    if (prevBtn[0] === undefined) return;

    let nextBtn = $("#next");
    if (nextBtn[0] === undefined) return;

    $(".gallery-img").map(function () {
        registerImage(this);
    }).get();    

    closeLightbox[0].addEventListener('click', () => {
        hideLightbox();
    });

    nextBtn[0].addEventListener('click', () => {
        nextLightbox()
    });

    prevBtn[0].addEventListener('click', () => {
        prevLightbox()
    });
}

registerEvents();