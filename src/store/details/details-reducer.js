import { SET_LOADING, SET_ERROR, SET_COUNTRY, CLEAR_DETAILS, SET_NEIGHBORS } from "./details-createActions";

const initialState = {
    currentCountry: '',
    status: 'idle',
    error: null,
    neighbors: [],
}

export const detailsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case SET_COUNTRY: 
            return {
                ...state,
                status: 'received',
                currentCountry: payload
            }
        case SET_ERROR: 
            return {
                ...state,
                error: payload,
                status: 'rejected'
            }
        case SET_LOADING: 
            return {
                ...state,
                error: null,
                status: 'loading'
            }
        case CLEAR_DETAILS: 
            return initialState
        case SET_NEIGHBORS: 
            return {
                ...state,
                neighbors: payload,
            }
        default: 
            return state;
    }
}