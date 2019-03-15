import { GET_USERS } from './types'
import {createAction} from 'redux-actions'

const userUrl = 'https://jsonplaceholder.typicode.com/users'
const getUsers = createAction(GET_USERS)

export const excuteGetUsers = () => (dispatch, getState) => {
  const header = {
    method: 'GET'
  }
  dispatch(getUsers())
  return fetch(userUrl, header).then(response => {
    console.log(response)
    if(response.ok) {
      return response.json().then(data=> {
        dispatch(getUsers(data))
      })
    }
  })
}
