import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallary = document.querySelector('.gallery');

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images
        .map(
            (img) => `
                <li class="gallery-item">
                    <a href="${img.largeImageURL}">
                        <img src="${img.webformatURL}" alt="${img.tags}" loading lazy />
                    </a>
                    <div class="info">
                     <p><b>Likes </b>${img.likes}</p>
                     <p><b>Views </b>${img.views}</p>
                     <p><b>Comments </b>${img.comments}</p>
                     <p><b>Downloads </b>${img.downloads}</p>
                    </div>
                </li>`
        )
        .join("");
    
    gallary.innerHTML = markup;
    lightbox.refresh();
}

export function clearGallery() {

};

export function showLoader() {

};

export function hideLoader() {

};