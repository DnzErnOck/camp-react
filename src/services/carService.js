import axios from "axios";

export default class CarService {
    getCars() {
        return axios.get("http://localhost:8082/api/car/getAll")
    }
    getCarById(id){
        return axios.get("http://localhost:8082/api/car/getById/"+id)
    }
}