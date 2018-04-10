import axios from 'axios';
import { CITIES_REQUEST, CITIES_SUCCESS, CITIES_FAILURE } from './constants';
export function fetchCitiesIfNeeded(){
    return (dispatch, getState) => {
        if (getState().loaded==false) {
            // Обратимся у thunk из thunk!
            return dispatch(getCities())
        } else {
            // Дадим вызвавшему коду знать, что ждать нечего.
            return Promise.resolve()
        }
    }
}
export function getCities(){
    return (dispatch)=>{
        dispatch({type: CITIES_REQUEST});
        axios.get('/city')
            .then( (response) => {
                dispatch({
                    type: CITIES_SUCCESS,
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: CITIES_FAILURE,
                    payload:error
                });
            })
    };
}
