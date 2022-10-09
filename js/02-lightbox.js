import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
</a>
        </div>
      `;
    })
    .join("");
}

galleryListRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryListRef.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "gallery__image") {
    return;
  }
  console.log(event.target);
}
var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
