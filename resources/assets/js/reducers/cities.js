import {CITIES_REQUEST,CITIES_SUCCESS,CITIES_FAILURE} from '../constants';
const initialState = {
    fetching:false,
    loaded:false,
    data: []
};

export default function cities(state = initialState,action) {
    switch(action.type){
        case CITIES_REQUEST:
            return {...state, fetching: true};
        case CITIES_SUCCESS:
            return {...state, fetching: false, data: action.payload.data};
        case CITIES_FAILURE:
            return {...state, fetching: false};
        default:
            return state;
    }
}
