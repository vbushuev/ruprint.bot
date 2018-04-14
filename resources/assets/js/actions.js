import axios from 'axios';
import * as ACTION from './constants';
export function fetchCitiesIfNeeded(){
    return (dispatch, getState) => {
        const state = getState();
        if (state.cities.loaded==false) {
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
        dispatch({type: ACTION.CITIES_REQUEST});
        axios.get('/city')
            .then( (response) => {
                dispatch({
                    type: ACTION.CITIES_SUCCESS,
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.CITIES_FAILURE,
                    payload:error
                });
            })
    };
}
export function createCity(d){
    return (dispatch)=>{
        dispatch({type: ACTION.CITY_UPDATE_REQUEST});
        axios.post(`/city`,d)
            .then( (response) => {
                dispatch({
                    type: ACTION.CITY_CREATE_SUCCESS,
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.CITY_CREATE_FAILURE,
                    payload:error
                });
            })
    };
}
export function updateCity(d){
    return (dispatch)=>{
        dispatch({type: ACTION.CITY_UPDATE_REQUEST});
        axios.post(`/city/${d.id}`,{...d,_method:'PUT'})
            .then( (response) => {
                dispatch({
                    type: ACTION.CITY_UPDATE_SUCCESS,
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.CITY_UPDATE_FAILURE,
                    payload:error
                });
            })
    };
}
export function deleteCity(d){
    return (dispatch)=>{
        dispatch({type: ACTION.CITY_DELETE_REQUEST});
        axios.post(`/city/${d.id}`,{_method:'DELETE'})
            .then( (response) => {
                dispatch({
                    type: ACTION.CITY_DELETE_SUCCESS,
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.CITY_DELETE_FAILURE,
                    payload:error
                });
            })
    };
}
export function executorList(d){
    return (dispatch)=>{
        dispatch({type: ACTION.EXECUTORS_LIST,status:'request'});
        axios.get(`/executor`)
            .then( (response) => {
                dispatch({
                    type: ACTION.EXECUTORS_LIST,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.EXECUTORS_LIST,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function executorAdd(d){
    return (dispatch)=>{
        console.debug('executorAdd actions',d);
        dispatch({type: ACTION.EXECUTOR_ADD,status:'request'});
        axios.post(`/executor`,d)
            .then( (response) => {
                dispatch({
                    type: ACTION.EXECUTOR_ADD,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.EXECUTOR_ADD,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function executorEdit(d){
    return (dispatch)=>{
        dispatch({type: ACTION.EXECUTOR_EDIT,status:'request'});
        axios.post(`/executor/${d.id}`,{...d,_method:'PUT'})
            .then( (response) => {
                dispatch({
                    type: ACTION.EXECUTOR_EDIT,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.EXECUTOR_EDIT,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function executorRemove(d){
    return (dispatch)=>{
        dispatch({type: ACTION.EXECUTOR_REMOVE,status:'request'});
        axios.post(`/executor/${d.id}`,{_method:'DELETE'})
            .then( (response) => {
                dispatch({
                    type: ACTION.EXECUTOR_REMOVE,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.EXECUTOR_REMOVE,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function activityList(){
    return (dispatch)=>{
        dispatch({type: ACTION.ACTIVITIES_LIST,status:'request'});
        axios.get(`/activity`)
            .then( (response) => {
                dispatch({
                    type: ACTION.ACTIVITIES_LIST,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.ACTIVITIES_LIST,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function activityAdd(d){
    return (dispatch)=>{
        dispatch({type: ACTION.ACTIVITY_ADD,status:'request'});
        axios.post(`/activity`,d)
            .then( (response) => {
                dispatch({
                    type: ACTION.ACTIVITY_ADD,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.ACTIVITY_ADD,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function activityEdit(d){
    return (dispatch)=>{
        dispatch({type: ACTION.ACTIVITY_EDIT,status:'request'});
        axios.post(`/activity/${d.id}`,{...d,_method:'PUT'})
            .then( (response) => {
                dispatch({
                    type: ACTION.ACTIVITY_EDIT,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.ACTIVITY_EDIT,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
export function activityRemove(d){
    return (dispatch)=>{
        dispatch({type: ACTION.ACTIVITY_REMOVE,status:'request'});
        axios.post(`/activity/${d.id}`,{_method:'DELETE'})
            .then( (response) => {
                dispatch({
                    type: ACTION.ACTIVITY_REMOVE,
                    status: 'success',
                    payload:response
                });
            })
            .catch( (error) => {
                dispatch({
                    type: ACTION.ACTIVITY_REMOVE,
                    status: 'failure',
                    payload:error
                });
            })
    };
}
