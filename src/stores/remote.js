import { createStore, applyMiddleware } from 'redux'

import MasterReducer from '../reducers/master'
import MasterIntervalMiddleware from '../middlewares/master_interval'

export const store = createStore(
  MasterReducer,
  undefined,
  applyMiddleware(MasterIntervalMiddleware)
)
