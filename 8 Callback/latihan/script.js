const btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click', function(){
  const searchMovie = document.querySelector('.search-movie').value
  $.ajax({
    url: 'http://www.omdbapi.com/?apikey=c58f5023&s=' + searchMovie,
    success: result => {
      console.log(result)
      const movies = result.Search
      const moviesCards = document.querySelector('.movie-cards')
      let cards = ''
      movies.forEach( m => {
        cards += showCards(m)
      });
      moviesCards.innerHTML = cards
  
      var elements = Array.from(document.getElementsByClassName('modal-detail'));
      elements.forEach(element => {
        element.addEventListener('click', function(){
          $.ajax({
            url: 'http://www.omdbapi.com/?apikey=c58f5023&i=' + this.getAttribute('data-id'),
            success: movie => {
              const movieDetail = showDetailMovie(movie)
              const modalBody = document.querySelector('.modal-body')
              modalBody.innerHTML = movieDetail
            },
            error: error => {
              console.log(error.responseText)
            }
          })
        })
      })    
    },
    error : error => {
      console.log(error.responseText)
    }
  })
})

function showCards(m){
  return `<div class="col-md-3">
            <div class="card my-3">
              <img src="${m.Poster}" class="card-img-top">
              <div class="card-body  movie-card">
                <h5 class="card-title">${m.Title}</h5>
                <p class="card-text">${m.Year}</p>
                <a href="#" class="btn btn-primary modal-detail" data-toggle="modal" data-target="#movieDetailModal" data-id=${m.imdbID}>Show Detail</a>
              </div>
            </div>
          </div>`
}

function showDetailMovie(movie){
  return `<div class="container-fluid">
            <div class="row">
              <div class="col-md-4">
                <img src="${movie.Poster}" class="img-fluid">
              </div>
              <div class="col-md">
                <ul class="list-group">
                  <li class="list-group-item active"><h4>${movie.Title}</h4> ${movie.Year}</li>
                  <li class="list-group-item"><strong>Director: </strong> ${movie.Director}</li>
                  <li class="list-group-item"><strong>Actors :</strong>${movie.Actors}</li>
                  <li class="list-group-item"><strong>Writer :</strong>${movie.Writer}</li>
                  <li class="list-group-item"><strong>Plot :</strong><br>${movie.Plot}</li>
                </ul>
              </div>
            </div>
          </div>`
}