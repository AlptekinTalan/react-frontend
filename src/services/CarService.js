import axios from 'axios';

const CAR_API_BASE_URL = "http://localhost:8080/car/list";
const CAR_API_ADD_URL = "http://localhost:8080/car/add";
const CAR_API_UPDATE_URL = "http://localhost:8080/car/update";
const CAR_API_GET_URL = "http://localhost:8080/car";


class CarService{

    getCars(){
        return axios.get(CAR_API_BASE_URL);
    }

    createCar(car){
        return axios.post(CAR_API_ADD_URL, car);
    }

    getCarById(carId){
        return axios.get(CAR_API_GET_URL + '/' + carId);
    }

    updateCar(car){
        return axios.post(CAR_API_UPDATE_URL,car);
    }

}

export default new CarService()