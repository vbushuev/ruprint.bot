import { combineReducers } from 'redux'



import executors from './executors'
import activities from './activities'
import cities from './cities'
import user from './user'

const rootReducer = combineReducers({
    user,
    cities,
    activities,
    executors
})
export default rootReducer;
