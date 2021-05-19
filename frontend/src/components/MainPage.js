import axios from 'axios';
import { useState, useEffect } from 'react';

function MainPage() {
    const [data, setData] = useState([]);

    const getData = async () => {
        await axios.post('localhost:5000/api/films').then((res) => {
            try {
                console.log(res.data.films);
                setData(res.data.films);
            }
            catch (err) {
                console.log(err)
            }
        })            
    }

    useEffect(() => {
        if (data.length === 0) {
            getData()
            console.log('Getting data...')
        } else {
            console.log(data);
        }
    })

    return (
        <>
            <h1>Wooooop</h1>
            {data}
        </>
    )
}

export default MainPage;