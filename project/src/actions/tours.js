import swal from "sweetalert";
import * as api from '../utils/Api';

export const getTours = () => async (dispatch) => {
    try {
        const { data } = await api.fetch();

        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}


export const createTour = (tour, history) => async (dispatch) => {
    try {
        const { data } = await api.createTour(tour);

        dispatch({ type: 'CREATE', payload: data });
        swal({
            title: "Wisata Berhasil Ditambahkan!",
            text: "Sukses Update Pesanan ",
            icon: "success",
            button: false,
            timer: 1500,
        });
        history.push('/Pariwisata');
    } catch (error) {
        console.log(error.message);
    }
}

export const updateTour = (id, tour) => async (dispatch) => {
    try {
        const { data } = await api.updateTour(id, tour);

        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteTour = (id) => async (dispatch) => {
    try {
        await api.deleteTour(id);

        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error);
    }
}