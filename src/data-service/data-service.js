class DataService {
    addToSessionStorage = (key, value) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    };

    getFromSessionStorage = (key) => {
        return JSON.parse(sessionStorage.getItem(key));
    };

    saveNasaImagesToSessionStorage = (nasaImages) => {
        this.addToSessionStorage('nasaImages', nasaImages);
    };

    getNasaImagesFromSessionStorage = () => {
        return this.getFromSessionStorage('nasaImages');
    };
}

const dataServiceInstance = new DataService();

export default dataServiceInstance;
