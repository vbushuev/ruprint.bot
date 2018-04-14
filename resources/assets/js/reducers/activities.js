import * as ACTION from '../constants';
const initialState = {
    fetching:false,
    error: null,
    data:[]
};
export default function activities(state = initialState,action) {
    switch(action.type){
        case ACTION.ACTIVITIES_LIST:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success': return {...state, fetching: false, data: action.payload.data};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
            break;
        case ACTION.ACTIVITY_ADD:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success':
                    let newList = state.data.slice();
                    newList.push(action.payload);
                    return {...state, fetching: false, data: newList};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        break;
        case ACTION.ACTIVITY_EDIT:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success':
                    let newList = state.data.slice();
                    newList.push(action.payload);
                    return {...state, fetching: false, data: newList};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        break;
        case ACTION.ACTIVITY_REMOVE:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success':
                    let newList = state.data.slice();
                    newList.push(action.payload);
                    return {...state, fetching: false, data: newList};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        break;
        default: return state;
    }
}
