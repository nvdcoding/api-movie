const axios = require('axios');

const MovieStore = require('../data/MovieStore');
const { getMovieById } = require('../helper/helper');

module.exports = {

  getAll(req, res) {
    const movieStore = new MovieStore();
    return res.send(movieStore.getAll());
  },

  search(req, res) {
    const key = req.params.key;
    const year = req.params.year;
    axios.get(`omdbapi.com/?s=${key}&y=${year}&apikey=a729fa11`)
      .then((response) => {
        res.statusCode = 200;
        return res.send(response.data);
      })
      .catch((err) => {
        res.statusCode = 404;
        console.log(err);
      });
  },

  async add(req, res) {
    const movieStore = new MovieStore();
    const movie = await getMovieById(req.body.id);
    const idArr = movieStore.getAll().map((x) => x.imdbID);
    if(idArr.includes(movie.imdbID)) {
      res.statusCode = 404;
      return res.send({
        message: 'movie already existed'
      })
    }
    movieStore.add(movie);
    return res.send({
      message: 'add movie successfully'
    });
  },

  remove(req, res) {
    const movieStore = new MovieStore();
    const id = movieStore.getAll().map((x) => x.imdbID).find((x) => x == req.body.id);
    if(typeof id === 'undefined') {
      res.statusCode = 404;
      return res.send({
        message: 'movie not found'
      });
    }
    movieStore.remove(req.body.id);
    return res.send({
      message: 'delete movie successfully'
    });
  }

};