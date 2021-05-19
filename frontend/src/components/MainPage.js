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
                    <h2 className="film-title">{film.title}</h2>
                ))}
            </div>

        </>
    )
}

export default MainPage;