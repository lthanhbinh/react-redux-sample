import React from 'react';
import { render} from 'react-dom';
import {Provider} from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleWares from 'redux-thunk'
import reducers from './reducers'
import App from './containers/App'
import QuickPage from './containers/Quick'

const store = createStore(
  reducers,
  compose(
    applyMiddleware(
      thunkMiddleWares
    )
  )
)

render(
  <Provider store={store}>
      <QuickPage />
  </Provider>,
  document.getElementById('root')
)
