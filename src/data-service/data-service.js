/**
 * Data Service - Service for retrieving data from local/session storage
 * created on: 2022-01-08
 * author: @manoj30075
 */
class DataService {
    addToLocalStorage = (key, value) => {
        localStorage.setItem(key, JSON.stringify(value));
    };

    getFromLocalStorage = (key) => {
        return JSON.parse(localStorage.getItem(key));
    };

    saveNasaImagesToLocalStorage = (nasaImages) => {
        this.addToLocalStorage('nasaImages', nasaImages);
    };

    getNasaImagesFromLocalStorage = () => {
        return this.getFromLocalStorage('nasaImages');
    };
}

const dataServiceInstance = new DataService();

export default dataServiceInstance;
