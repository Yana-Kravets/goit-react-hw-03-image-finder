import axios from 'axios';

const API_KEY = '35857007-5cd1c4f05c8d06f05cd6de322';

export async function fetchItems(query, page) {
    const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
    const response = await axios.get(url);
  
    return response.data;
  }
