// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";



// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);


const gallery = document.querySelector(`.gallery`)


const markup = galleryItems.map(({preview, original, description}) =>
    `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`);


gallery.insertAdjacentHTML("beforeend", markup.join(""));

gallery.style.listStyle = "none"

new SimpleLightbox('.gallery a', {
    captionDelay: 250,
  });

