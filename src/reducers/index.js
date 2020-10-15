import{ combineReducers } from 'redux'
import count  from './count'

export default combineReducers({count})
//複数管理したいとき
// export default combineReducers({foo,var,baz})