import { createStore, applyMiddleware } from 'redux'

import ClientReducer from '../reducers/client'
import MasterReducer from '../reducers/master'
import MasterIntervalMiddleware from '../middlewares/master_interval'
// import RemoteMasterMiddleware from '../middlewares/remote_master'

const RootReducer = (state, action) => {
  return ClientReducer(MasterReducer(state, action), action)
}

export const store = createStore(
  RootReducer,
  undefined,
  applyMiddleware(MasterIntervalMiddleware)
)

// export const store = createStore(
  // ClientReducer,
  // undefined,
  // applyMiddleware(RemoteMasterMiddleware)
// )
