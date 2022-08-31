import Notiflix from 'notiflix';
import axios from 'axios';
import PixabayApiService from './js/pixabay-service';
import { markupListOfImagesEl } from './js/markup';

const refs = {
  searchEl: document.querySelector('.search-form'),
  galleryEl: document.querySelector('.gallery'),
  btnLoadMoreEl: document.querySelector('.load-more'),
};

const pixabayApiService = new PixabayApiService();

refs.searchEl.addEventListener('submit', onSearch);
refs.btnLoadMoreEl.addEventListener('click', onLoadMore);

function onSearch(event) {
  event.preventDefault();

  pixabayApiService.query = event.currentTarget.elements.searchQuery.value;
  //   console.log(searchQuery);
  pixabayApiService.resetPage();
  pixabayApiService.fetchImages().then(markup);

  //   refs.listCountriesEl.innerHTML = '';
  //   refs.infoOfCountryEl.innerHTML = '';

  //   fetchImages(searchQuery).then(markup).catch(error);
}

function onLoadMore() {
  pixabayApiService.fetchImages().then(markup);
}

function markup(allImages) {
  //   let amountOfCountries = allCountries.length;

  //   if (amountOfCountries > 10) {
  //     return noMarkupEl();
  //   }

  //   if (amountOfCountries > 1 && amountOfCountries <= 10) {
  //     return renderListCountries(allCountries);
  //   }

  renderListOfGallery(allImages);
}

function renderListOfGallery(allImages) {
  const markupListOfGallery = markupListOfImagesEl(allImages);
  refs.galleryEl.insertAdjacentHTML('beforeend', markupListOfGallery);
}
