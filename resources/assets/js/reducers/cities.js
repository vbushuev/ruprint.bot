import * as ACTION from '../constants';
const initialState = {
    fetching:false,
    loaded:false,
    data: []
};

export default function cities(state = initialState,action) {

    switch(action.type){
        case ACTION.CITIES_REQUEST:
            return {...state, fetching: true};
        case ACTION.CITIES_SUCCESS:
            return {...state, fetching: false, data: action.payload.data};
        case ACTION.CITIES_FAILURE:
            return {...state, fetching: false};
        case ACTION.CITY_CREATE_SUCCESS:
            let dd = state.data.slice();
            dd.push(action.payload.data);
            return {...state, fetching: false, data: dd};
        case ACTION.CITY_UPDATE_SUCCESS:
            const newCity = action.payload.data;
            let dl = [];
            state.data.map( (city,i) => {
                dl.push((city.id == newCity.id)?newCity:city);
            });

            return {...state, fetching: false, data: dl};
        case ACTION.CITY_DELETE_SUCCESS:
            return {...state, fetching: false, data: action.payload.data};
        default:
            return state;
    }
}
