import { ADD_FAVORITE, DELETE_FAVORITE, FETCH_DATA, SET_STATUS, RESET_STATUS, LOADING, LOADED } from './types';

export const favoriteReducer = (state = [], action) => {

    switch (action.type) {
        case ADD_FAVORITE:
            return [...state, action.payload];
        case DELETE_FAVORITE:
            return state.filter(dog => dog.id !== action.payload);
        case FETCH_DATA:
            return [...state, ...action.payload]
        default:
            return state;
    }
}

export const statusReducer = (state = { loadingId: '', ladingFavorites: false }, action) => {
    switch (action.type) {
        case SET_STATUS:
            return { ...state, loadingId: action.payload };
        case RESET_STATUS:
            return { ...state, loadingId: '', loadingFavorites: false };
        case LOADING:
            return { ...state, loadingFavorites: true }
        case LOADED:
            return { ...state, loadingFavorites: false }
        default:
            return state;
    }
}