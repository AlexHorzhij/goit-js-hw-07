import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const imgItemsMarkup = galleryItems.reduce((acc, item) => {
return acc += `<li><a class="gallery__item" href=${item.original}>
  <img class="gallery__image" src=${item.preview} alt=${item.description} />
</a></li>`
}, "")

gallery.insertAdjacentHTML('beforeend', imgItemsMarkup)

gallery.addEventListener("click", onScaleImage)

function onScaleImage(e) {
    e.preventDefault()
    const a = new SimpleLightbox('.gallery a', {captionDelay: 250,  captionsData:  'alt', });
}