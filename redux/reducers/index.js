import { combineReducers } from 'redux'
import tasks from './tasks'
import alert from './alert'

const rootReducer = combineReducers({
  tasks, alert,
})

export default rootReducer;