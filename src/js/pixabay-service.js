import axios from 'axios';

const URL_API = `https://pixabay.com/api/`;
const PIXABAY_KEY = `key=29626479-30d098b137805aefe019417a9&`;
const FILTER_VALUES = `image_type=photo&orientation=horizontal&safesearch=true`;

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  async fetchImages() {
    return await axios.get(
      `${URL_API}?${PIXABAY_KEY}q=${this.searchQuery}&${FILTER_VALUES}&per_page=${this.perPage}&page=${this.page}`
    );
  }

  incrementPage() {
    this.page += 1;
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
