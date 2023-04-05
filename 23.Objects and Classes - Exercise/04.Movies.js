function movies(array) {
    let movies = [];

    class Movie {
        constructor(name, director, date) {
            this.name = name;
            this.director = director;
            this.date = date;
        }
    }
    let contains = function (movieName) {
        // let movie = null;
        let movie = movies.find(m =>m.name === movieName);

        // movies.forEach(m => m.name === movieName ? movie = m : movie = null);
        return movie;
    }

    for (let i = 0; i < array.length; i++) {
        let command = array[i].split(' ');

        if (command.includes('addMovie')) {
            let name = command.slice(1, command.length).join(' ');
            movies.push(new Movie(name, null, null));
        } else if (command.includes('directedBy')) {
            let name1 = command.slice(0, command.indexOf('directedBy')).join(' ');
            // if (contains(name1) !== null) {
            if (contains(name1) !== undefined) {
                let movie = contains(name1);
                movie.director = command.slice(command.indexOf('directedBy') + 1, command.length).join(' ');
            }
        } else if (command.includes('onDate')) {
            let name2 = command.slice(0, command.indexOf('onDate')).join(' ');
            // if (contains(name2) !== null) {
            if (contains(name2) !== undefined) {
                let movie = contains(name2);
                movie.date = command.slice(command.indexOf('onDate') + 1, command.length).join(' ');
            }
        }
    }
    movies.forEach(m => m.director != null && m.name != null && m.date != null ? console.log(JSON.stringify(m)) : null);
}

function movies(input) {
    let movies = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i].includes('addMovie')) {
            let movieName = input[i].replace(/addMovie\s*/, '');
            if (!movies.hasOwnProperty(movieName)) {
                movies[movieName] = { name: movieName };
            }
        } else if (input[i].includes('onDate')) {
            let [movieName, date] = input[i].split(/\s*onDate\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['date'] = date;
            }
        } else if (input[i].includes('directedBy')) {
            let [movieName, director] = input[i].split(/\s*directedBy\s*/);
            if (movies.hasOwnProperty(movieName)) {
                movies[movieName]['director'] = director;
            }
        }
    }
    for (const movieName in movies) {
        const movie = movies[movieName];
        if (
            movie.hasOwnProperty('name') &&
            movie.hasOwnProperty('date') &&
            movie.hasOwnProperty('director')
        ) {
            console.log(JSON.stringify(movie));
        }
    }
}

movies([

    'addMovie Fast and Furious',
    
    'addMovie Godfather',
    
    'Inception directedBy Christopher Nolan',
    
    'Godfather directedBy Francis Ford Coppola',
    
    'Godfather onDate 29.07.2018',
    
    'Fast and Furious onDate 30.07.2018',
    
    'Batman onDate 01.08.2018',
    
    'Fast and Furious directedBy Rob Cohen'
    
    ])

movies([

    'addMovie The Avengers',
    
    'addMovie Superman',
    
    'The Avengers directedBy Anthony Russo',
    
    'The Avengers onDate 30.07.2010',
    
    'Captain America onDate 30.07.2010',
    
    'Captain America directedBy Joe Russo'])