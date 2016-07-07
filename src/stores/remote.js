import { createStore, applyMiddleware } from 'redux'

import MasterReducer from '../reducers/master'
import IntervalMiddleware from '../middlewares/interval'

export const store = createStore(
  MasterReducer,
  undefined,
  applyMiddleware(IntervalMiddleware)
)