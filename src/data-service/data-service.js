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
