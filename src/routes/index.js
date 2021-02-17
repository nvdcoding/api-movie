
const movieController = require('../controllers/MovieController');

module.exports = {

  index(app) {

    app.get('/movies', movieController.getAll);
    app.get('/movies/:key/:year', movieController.search);
    app.post('/movies/add/', movieController.add);
    app.delete('/movies/remove', movieController.remove);
  }

}