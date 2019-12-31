import number from './number'
import color from './color'

import {combineReducers} from 'redux'

//combineReducers를 활용하여 리듀서를 쪼개서 구현후 합칠 수 있다.
const reducers = combineReducers({
  numberData: number,
  colorData: color
})

export default reducers