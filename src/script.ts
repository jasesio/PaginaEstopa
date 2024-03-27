declare function lightGallery(element: HTMLElement): void;

document.addEventListener('DOMContentLoaded', function () {
    const lightGalleryElement = document.getElementById('lightgallery') as HTMLElement | null;
    if (lightGalleryElement) {
        lightGallery(lightGalleryElement);
    } else {
        console.error('Element with id "lightgallery" not found.');
    }
});