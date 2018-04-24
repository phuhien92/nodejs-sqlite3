import axios from 'axios';

const API_ROOT = "";

const encode = encodeURIComponent;
const responseBody = res => res.body;

const requests = {
    del: url =>
        axios.delete(`${API_ROOT}${url}`).then(responseBody),
    get: url => 
        axios.get(`${API_ROOT}${url}`).then(responseBody),
    put: url => 
        axios.put(`${API_ROOT}${url}`).then(responseBody),
    post: url => 
        axios.post(`${API_ROOT}${url}`).then(responseBody),
};

const Profile = {
    get: username => requests.get(`/profiles/${username}`)
}

export default {
    Profile
}