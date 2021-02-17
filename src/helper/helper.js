const axios = require('axios');
module.exports = {

  getMovieById(id) {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=a729fa11`;
    const data = axios.get(url).then((res) => res.data);
    return data;
  }

}