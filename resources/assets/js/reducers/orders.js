import * as ACTION from '../constants';
const initialState = {
    fetching:false,
    loaded:false,
    data: []
};

export default function orders(state = initialState,action) {
    switch(action.type){
        case ACTION.ORDER_REQUEST:
            return {...state, fetching: true};
        case ACTION.ORDER_SUCCESS:
            return {...state, fetching: false, data: action.payload.data};
        case ACTION.ORDER_FAILURE:
            return {...state, fetching: false};
        default:
            return state;
    }
}
