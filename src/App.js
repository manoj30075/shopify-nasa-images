import { useState, useEffect } from 'react';
import axiosInstance from './axios-instance';
import dataServiceInstance from "./data-service/data-service";

import Cards from './Cards/Cards';
import constants from "./constants";
import "./App.css"

const transformCardData = (data) => (data.map((card, index) => ({
    title:card.title,
    description:card.explanation,
    url:card.url,
    date:card.date,
    id:index,
    liked:false
})))

const App = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const nasaImages = dataServiceInstance.getNasaImagesFromSessionStorage();

    useEffect(() => {
        if (!nasaImages) {
            axiosInstance.get(`/planetary/apod?count=12&api_key=${constants.NASA_API_KEY}`)
                .then(res => {
                    setLoading(false);
                    const transformedData = transformCardData(res.data);
                    setData(transformedData);
                    dataServiceInstance.saveNasaImagesToSessionStorage(transformedData);
                })
                .catch(err => {
                    setLoading(false);
                    setError("");
                    console.log(err);
                });
        } else {
            setLoading(false);
            setData(nasaImages);
        }
    }, [nasaImages]);

    return (
    <>
        {error && <p className="error-message">{error}</p>}
        {loading && <div className="loader"/>}
        {data.length > 0 ? <Cards key="cards" data={data} /> : null}
    </>
    );
}

export default App;
