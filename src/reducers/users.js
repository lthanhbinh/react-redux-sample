import {combineReducers} from 'redux'
import {handleActions} from 'redux-actions'

import {GET_USERS} from '../actions/types'

const userDefaultState = {list: null}

const users = handleActions({
  [GET_USERS]: {
    next(state, action) {
      console.log(action)
      if(action.payload) {
        return {list: action.payload}
      }
      return userDefaultState
    }
  }
}, userDefaultState)

export default combineReducers({users})
