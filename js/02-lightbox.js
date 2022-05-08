import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const galleryEl = document.querySelector(".gallery");
const makeImages = ({ preview, original, description }) => {
  return `
    <a class = 'gallery__item' href = '${original}'>
      <img
        class="gallery__image"
        src='${preview}'
        alt='${description}'
        />
      </a>
    `;
};

const makeImagesList = galleryItems.map(makeImages).join("");
galleryEl.insertAdjacentHTML("beforeend", makeImagesList);

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
  close: false,
});