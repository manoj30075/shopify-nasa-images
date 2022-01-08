import { useState, useEffect } from 'react';
import instance from './axios-instance';

import Cards from './Cards/Cards';
import constants from "./constants";

const App = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
    instance.get(`/planetary/apod?count=10&api_key=${constants.NASA_API_KEY}`)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    }, []);

    return (
    <>
        {data && <Cards data={data} />}
    </>
    );
}

export default App;
