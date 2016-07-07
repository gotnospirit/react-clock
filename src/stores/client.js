import { createStore, applyMiddleware } from 'redux'

import ClientReducer from '../reducers/client'
import RemoteMiddleware from '../middlewares/remote'

export const store = createStore(
  ClientReducer,
  undefined,
  applyMiddleware(RemoteMiddleware)
)