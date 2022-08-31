import Notiflix from 'notiflix';
import axios from 'axios';
import PixabayApiService from './js/pixabay-service';

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

  pixabayApiService.fetchImages();

  //   refs.listCountriesEl.innerHTML = '';
  //   refs.infoOfCountryEl.innerHTML = '';

  //   fetchImages(searchQuery).then(markup).catch(error);
}

function onLoadMore() {
  pixabayApiService.fetchImages();
}
