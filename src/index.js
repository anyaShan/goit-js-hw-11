import Notiflix from 'notiflix';
import axios from 'axios';
import PixabayApiService from './js/pixabay-service';
import { markupListOfImagesEl } from './js/markup';

const refs = {
  searchEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  btnLoadMoreEl: document.querySelector('.load-more'),
  // btnSearch: document.querySelector('button[type="submit"]'),
};

const pixabayApiService = new PixabayApiService();

refs.searchEl.addEventListener('submit', onSearch);
refs.btnLoadMoreEl.addEventListener('click', onLoadMore);

refs.btnLoadMoreEl.classList.add('is-hidden');

function onSearch(event) {
  event.preventDefault();

  clearListOfGallery();
  pixabayApiService.query =
    event.currentTarget.elements.searchQuery.value.trim();
  // console.log(pixabayApiService.query);

  refs.btnLoadMoreEl.classList.add('is-hidden');

  if (pixabayApiService.query === '') {
    return noMarkupEl();
  }

  pixabayApiService.resetPage();
  pixabayApiService.fetchImages().then(notification).then(markup);

  // refs.galleryEl.innerHTML = '';
  //   refs.infoOfCountryEl.innerHTML = '';

  //   fetchImages(searchQuery).then(markup).catch(error);
}

function onLoadMore() {
  pixabayApiService.incrementPage();
  pixabayApiService.fetchImages().then(notification).then(markup);
  // .catch(error => console.log(error));
}

function notification({ data }) {
  const allImages = data.hits;
  const totalImages = data.totalHits;
  const amountOfImages = pixabayApiService.perPage * pixabayApiService.page;
  // console.log(totalImages);
  let emptyArr = [];

  if (allImages.length === emptyArr.length) {
    return noMarkupEl();
  }

  if (pixabayApiService.page === 1) {
    successMarkupEl(totalImages);
  }

  if (amountOfImages > 100) {
    refs.btnLoadMoreEl.classList.add('is-hidden');

    return endOfMarkupEl();
  }

  return data;
}

function markup(data) {
  const allImages = data.hits;
  renderListOfGallery(allImages);

  refs.btnLoadMoreEl.classList.remove('is-hidden');
}

function renderListOfGallery(allImages) {
  const markupListOfGallery = markupListOfImagesEl(allImages);
  refs.galleryEl.insertAdjacentHTML('beforeend', markupListOfGallery);
}

function clearListOfGallery() {
  refs.galleryEl.innerHTML = '';
}

function noMarkupEl() {
  refs.searchEl.reset();

  Notiflix.Notify.failure(
    'Sorry, there are no images matching your search query. Please try again.'
  );
}

function successMarkupEl(totalImages) {
  Notiflix.Notify.success(`Hooray! We found ${totalImages} images.`);
}

function endOfMarkupEl() {
  Notiflix.Notify.failure(
    "We're sorry, but you'failureve reached the end of search results."
  );
}
