const fs = require('fs');
class MovieStore {

  constructor() {
    this.movieData = require('./data.json');
  }

  getAll() {
    return this.movieData;
  }

  add(movie) {
    this.movieData.push(movie);
    fs.writeFile('src/data/data.json', JSON.stringify(this.movieData), (err) => {
      console.log(err);
    });
  }

  remove(id) {
    this.movieData = this.movieData.filter((x) => x.imdbID != id);
    fs.writeFile('src/data/data.json', JSON.stringify(this.movieData), (err) => {
      console.log(err);
    });
  }
}
module.exports =  MovieStore;