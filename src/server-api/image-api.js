import axios from 'axios';

const KEY = '19126016-103aa59bb71a26917231b8540';
axios.defaults.baseURL = `https://pixabay.com/api`;

export const fetchImages = (query, page) => {
  return axios.get(
    `/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
};
