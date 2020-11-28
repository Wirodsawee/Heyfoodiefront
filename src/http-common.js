import axios from 'axios';

export default axios.create({
    // baseURL: "http://localhost:8000/hfapi",
    baseURL: "https://heyfoodie.herokuapp.com/hfapi",
    headers: {
        "Content-type": "application/json",
    }
});