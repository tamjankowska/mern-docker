import axios from 'axios';
import { useState, useEffect } from 'react';

function MainPage() {
    const [films, setFilms] = useState([]);

    const getFilms = async () => {
        const url = 'http://localhost:5000/api/films';
        await axios.get(url).then((res) => {
            try {
                console.log(res.data);
                setFilms(res.data);
            } catch (err) {
                console.log(err)
            }
        })            
    }

    useEffect(() => {
        if (films.length === 0) {
            getFilms()
            console.log('Getting data...')
        } else {
            console.log(`Data retrieved: ${films}`);
        }
    })

    return (
        <>
            <div className="films">
                {films.map(film => (
                    <div className="film-object">
                        <h2 className="film-title">{film.title}</h2>
                        <h3 className="film-director">Director: {film.director}</h3>
                        <h3 className="film-genre">Genre: {film.genre}</h3>
                        <h3 className="film-release">Released: {film.releaseYear}</h3>
                        <h3 className="film-rating"> Rated {film.rating}/10</h3>
                    </div>
                ))}
            </div>

        </>
    )
}

export default MainPage;