export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchImages() {
    const URL_API = `https://pixabay.com/api/`;
    const PIXABAY_KEY = `key=29626479-30d098b137805aefe019417a9&`;
    const FILTER_VALUES = `image_type=photo&orientation=horizontal&safesearch=true`;
    const FILTER_PAGE = `per_page=40`;

    return fetch(
      `${URL_API}?${PIXABAY_KEY}q=${this.searchQuery}&${FILTER_VALUES}&${FILTER_PAGE}&${this.page}`
    )
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.incrementPage();

        return data.hits;
      });

    //   return fetch(`${URL_API}${name}?${FILTER_VALUES}`).then(response => {
    //     if (!response.ok) {
    //       throw new Error(response.status);
    //     }
    //     return response.json();
    //   });
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
