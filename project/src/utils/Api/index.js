import axios from "axios";

const API = axios.create({ baseURL: 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const fetch = () => API.get('/tour');
export const createTour = (newTour) => API.post('/tour', newTour);
export const updateTour = (id, updateTour) => API.patch(`/tour/${id}`, updateTour);
export const deleteTour = (id) => API.delete(`/tour/${id}`);


export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);