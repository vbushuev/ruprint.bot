import * as ACTION from '../constants';
const initialState = {
    fetching:false,
    error: null,
    data:[]
};

export default function executors(state = initialState,action) {

    switch(action.type){
        case ACTION.EXECUTORS_LIST:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success': return {...state, fetching: false, data: action.payload.data};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }

        case ACTION.EXECUTOR_ADD:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success':
                    let newList = state.data.slice();
                    newList.push(action.payload.data);
                    console.debug(ACTION.EXECUTOR_ADD,newList);
                    return {...state, fetching: false, data: newList};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        case ACTION.EXECUTOR_EDIT:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success':
                    const newItem = action.payload.data;
                    let dl = [];
                    state.data.map( (item,i) => {
                        dl.push((item.id === newItem.id)?newItem:item);
                    });

                    return {...state, fetching: false, data: newList};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        case ACTION.EXECUTOR_REMOVE:
            switch(action.status){
                case 'request': return {...state, fetching: true};
                case 'success': return {...state, fetching: false, data: action.payload.data};
                case 'failure': return {...state, fetching: false, error: action.payload};
            }
        default: return state;
    }
}
