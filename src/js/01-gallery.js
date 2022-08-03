// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const refs = {
    gallery: document.querySelector('.gallery'),
}

createGalleryItems();

let gallery = new SimpleLightbox('.gallery a', {
  captions: true,
  captionSelector: 'img',
  captionType: 'attr',
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
    })

function createGalleryItems() {
    const galleryMarkup = galleryItems.map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`
}).join('')
    refs.gallery.insertAdjacentHTML('afterbegin', galleryMarkup);
};
// Change code below this line
console.log(galleryItems);
