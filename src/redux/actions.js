import axios from 'axios';
import { ADD_FAVORITE, DELETE_FAVORITE, SET_STATUS, RESET_STATUS, FETCH_DATA, LOADING, LOADED } from './types';

const apiHost = "https://5ea568682d86f00016b45ba7.mockapi.io";


export const addFavorite = (dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        })
        axios.post(`${apiHost}/favorites`, { dogId })
            .then((result) => {
                const eklenenFavori = result.data;
                dispatch({
                    type: ADD_FAVORITE,
                    payload: eklenenFavori
                })
                dispatch({
                    type: RESET_STATUS,
                    payload: dogId
                })
            })
    }
}

export const deleteFavorite = (id, dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        })
        axios.delete(`${apiHost}/favorites/${id}`).then((result) => {
            dispatch({
                type: DELETE_FAVORITE,
                payload: id
            })
            dispatch({
                type: RESET_STATUS,
                payload: dogId
            })
        })
    }
}


export const fetchData = () => {
    return dispatch => {
        dispatch({
            type: LOADING
        })
        axios.get(`${apiHost}/favorites`).then((result) => {
            dispatch({
                type: FETCH_DATA,
                payload: result.data
            })
            dispatch({
                type: LOADED
            })
        })
    }
}

export const showStatus = (dogId) => {
    return dispatch => {
        dispatch({
            type: SET_STATUS,
            payload: dogId
        })
    }
}
