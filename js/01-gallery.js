import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery")

const imgItemsMarkup = galleryItems.reduce((acc, item) => {
  return acc += ` <div class="gallery__item">
        <a class="gallery__link" href=${item.original}>
        <img
        class="gallery__image"
        src=${item.preview}
        data-source=${item.original}
        alt=${item.description}
        />
        </a>
    </div>`
}, "")

gallery.insertAdjacentHTML('beforeend', imgItemsMarkup)

gallery.addEventListener("click", onScaleImage)

function onScaleImage(e) {
    e.preventDefault()

    if (e.target.nodeName === "IMG") {
           
        const instance = basicLightbox.create(`
            <img src=${e.target.dataset.source} width="800" height="600">
        `)

        instance.show(() => window.addEventListener("keydown", onEscapeImage))
        
        window.addEventListener("click", () => window.removeEventListener("keydown", onEscapeImage))

        function onEscapeImage(e) {
            if (e.code === "Escape") {
            instance.close(() => window.removeEventListener("keydown", onEscapeImage)) 
            }
        }
    }
}




// function onScaleImage(e) {
//     e.preventDefault()

//     if (e.target.nodeName === "IMG") {
//         const a = e.target.closest("a")
            
//         const instance = basicLightbox.create(`
//         <img src=${a.href} width="800" height="600">
//         `)
            
//         instance.show()
//         window.addEventListener("keydown", onEscapeImage)
            
//         function onEscapeImage(e) {
//         if (e.code === "Escape") {
//         instance.close() 
//         window.removeEventListener("keydown", onEscapeImage)
//         }
//         }
//     }
// }

