// import Notiflix from 'notiflix';
// import SimpleLightbox from 'simplelightbox';
// import 'simplelightbox/dist/simple-lightbox.min.css';
// import PixabayApiService from './js/pixabay-service';
// import { markupListOfImagesEl } from './js/markup';

// const refs = {
//   searchEl: document.querySelector('.search-form'),
//   galleryEl: document.querySelector('.gallery'),
//   btnLoadMoreEl: document.querySelector('.load-more'),
// };

// const pixabayApiService = new PixabayApiService();

// const lightbox = new SimpleLightbox('.gallery a', {
//   captionsData: 'alt',
//   captionDelay: 250,
// });

// refs.searchEl.addEventListener('submit', onSearch);
// refs.btnLoadMoreEl.addEventListener('click', onLoadMore);

// refs.btnLoadMoreEl.classList.add('is-hidden');

// function onSearch(event) {
//   event.preventDefault();

//   clearListOfGallery();
//   pixabayApiService.query =
//     event.currentTarget.elements.searchQuery.value.trim();

//   refs.btnLoadMoreEl.classList.add('is-hidden');

//   if (pixabayApiService.query === '') {
//     return noMarkupEl();
//   }

//   pixabayApiService.resetPage();
//   pixabayApiService
//     .fetchImages()
//     .then(markup)
//     .then(notification)
//     .catch(error => console.log(error));
// }

// function onLoadMore() {
//   pixabayApiService.incrementPage();
//   pixabayApiService
//     .fetchImages()
//     .then(markup)
//     .then(notification)
//     .catch(error => console.log(error));
// }

// function markup({ data }) {
//   const allImages = data.hits;
//   const totalImages = data.totalHits;

//   if (allImages.length === 0) {
//     return noMarkupEl();
//   }

//   if (pixabayApiService.page === 1) {
//     successMarkupEl(totalImages);
//   }

//   renderListOfGallery(allImages);
//   lightbox.refresh();

//   refs.btnLoadMoreEl.classList.remove('is-hidden');

//   return totalImages;
// }

// function notification(totalImages) {
//   const amountOfImages = pixabayApiService.perPage * pixabayApiService.page;

//   if (totalImages < amountOfImages) {
//   }
//   if (amountOfImages > totalImages || totalImages < amountOfImages) {
//     refs.btnLoadMoreEl.classList.add('is-hidden');

//     return endOfMarkupEl();
//   }
// }

// function renderListOfGallery(allImages) {
//   const markupListOfGallery = markupListOfImagesEl(allImages);
//   refs.galleryEl.insertAdjacentHTML('beforeend', markupListOfGallery);
// }

// function clearListOfGallery() {
//   refs.galleryEl.innerHTML = '';
// }

// function noMarkupEl() {
//   refs.searchEl.reset();

//   Notiflix.Notify.failure(
//     'Sorry, there are no images matching your search query. Please try again.'
//   );
// }

// function successMarkupEl(totalImages) {
//   Notiflix.Notify.success(`Hooray! We found ${totalImages} images.`);
// }

// function endOfMarkupEl() {
//   Notiflix.Notify.failure(
//     "We're sorry, but you'failureve reached the end of search results."
//   );
// }
