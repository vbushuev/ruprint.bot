import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { combineForms,createForms } from 'react-redux-form'



import executors from './executors'
import activities from './activities'
import cities from './cities'
import orders from './orders'

const rootReducer = combineReducers({
    orders,
    cities,
    activities,
    executors,
    ...createForms({
        city: {},
        activity: {},
        executor: {},
    })
})
export default rootReducer;
