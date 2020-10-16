import{ combineReducers } from 'redux'
import events  from './events'

export default combineReducers({events})
//複数管理したいとき
// export default combineReducers({foo,var,baz})