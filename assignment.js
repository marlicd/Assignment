fetch ('http://localhost:3000/films')
    .then(response => response.json())
    .then( Films => {
        const filmsContainer = document.getElementById('films-container')
        filmsContainer.innerHTML = '<h1>FILMS AVAILABLE:</h1>'
        Films.forEach(film => {
            const div = document.createElement('div')
            div.innerHTML = `<h2><i>${film.title}</i></h2><img src =${film.poster}><br> Run time:${film.runtime}<br>Showtime: ${film.showtime}<br> Description: ${film.description}`
            filmsContainer.appendChild(div)
    })
    }
    )