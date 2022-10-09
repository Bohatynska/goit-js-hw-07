import { galleryItems } from "./gallery-items.js";

// Change code below this line
// console.log(galleryItems);
const galleryListRef = document.querySelector(".gallery");
const galleryMarkup = createGalleryItems(galleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })

    .join("");
}
galleryListRef.insertAdjacentHTML("beforeend", galleryMarkup);
galleryListRef.addEventListener("click", onGalleryListClick);

function onGalleryListClick(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  console.log(event.target);
  const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">
  `,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeyAction);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeyAction);
      },
    }
  );

  instance.show();
  document.addEventListener(onKeyAction);
  function onKeyAction({ key }) {
    if (key === "Escape") {
      console.log("click");
      instance.close();
    }
  }
}
