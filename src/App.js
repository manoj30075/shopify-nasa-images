import { useEffect } from 'react';
import instance from './axios-instance';
import logo from './logo.svg';
import './App.css';
import constants from "./constants";

const App = () => {
  useEffect(() => {
    instance.get(`/planetary/apod?count=10&api_key=${constants.NASA_API_KEY}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
