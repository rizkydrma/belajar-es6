const btnSearch = document.querySelector('.btn-search')
btnSearch.addEventListener('click', function(){
  const searchMovie = document.querySelector('.search-movie')
  fetch('http://www.omdbapi.com/?apikey=c58f5023&s=' + searchMovie.value)
    .then(respone => respone.json())
    .then(response => {
      const movies = response.Search
      let cards = ''
      movies.forEach(movie => cards += showCards(movie))
      const moviesCards = document.querySelector('.movies-cards')
      moviesCards.innerHTML = cards


      // KETIKA TOMBOL DI KLIK
      const modalDetailButton = document.querySelectorAll('.modal-detail')
      modalDetailButton.forEach(btn => {
        btn.addEventListener('click', function(){
          const id = this.dataset.id
          fetch('http://www.omdbapi.com/?apikey=c58f5023&i=' + id)
            .then(response => response.json())
            .then(response => {
              const movieDetail = showDetailMovie(response)
              const modalBody = document.querySelector('.modal-body')
              modalBody.innerHTML = movieDetail
            })
        })
      })
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